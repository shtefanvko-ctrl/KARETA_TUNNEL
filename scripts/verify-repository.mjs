import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const bannedExt=new Set(['.exe','.msi','.dll','.bin','.zip','.tar','.gz']);
const bannedDirs=new Set(['dist','build','bin']);

function walk(dir,rel=''){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(entry.name==='.git'||entry.name==='node_modules')continue;
    const nextRel=path.posix.join(rel,entry.name);
    if(entry.isDirectory()){
      if(bannedDirs.has(entry.name))throw new Error('binary/build directory must not be committed: '+nextRel);
      walk(path.join(dir,entry.name),nextRel);
      continue;
    }
    if(bannedExt.has(path.extname(entry.name).toLowerCase()))throw new Error('binary/archive must not be committed: '+nextRel);
  }
}
walk(root);

const manifest=JSON.parse(fs.readFileSync(path.join(root,'release','cloudflared-manifest.json'),'utf8'));
if(!/^2026\.\d+\.\d+$/.test(manifest.version))throw new Error('invalid cloudflared manifest version');
if(!/^[a-f0-9]{40}$/i.test(manifest.release_commit))throw new Error('invalid release_commit');
if(!Array.isArray(manifest.platforms)||manifest.platforms.length<2)throw new Error('platform matrix missing');

const recovered=JSON.parse(fs.readFileSync(path.join(root,'release','recovered-artifacts.json'),'utf8'));
if(recovered.schema!==1)throw new Error('recovered artifact schema mismatch');
for(const item of [
  recovered.tunnel_client.binary,
  recovered.tunnel_client.sbom,
  recovered.tunnel_client.license_report
]){
  if(!/^[a-f0-9]{64}$/i.test(item.sha256)||!Number.isInteger(item.size)||item.size<=0)throw new Error('invalid recovered artifact metadata');
}
if(!/^[a-f0-9]{64}$/i.test(recovered.cloudflared.binary_sha256))throw new Error('invalid cloudflared recovered hash');

console.log('KARETA_TUNNEL repository verification: PASS');
