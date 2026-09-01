import test from 'node:test';
import assert from 'node:assert/strict';
import {forPersistence,forExport} from './storage.js';

const sensitive=[{id:'a1',company:'Kōwhai Labs',role:'Graduate Developer',status:'Interview',deadline:'2026-08-13',nextAction:'Prepare questions',notes:'Hana shared an unannounced team change.'}];

test('session-private notes never enter persistent records',()=>{
  const json=JSON.stringify(forPersistence(sensitive));
  assert.equal(json.includes('unannounced team change'),false);
  assert.equal(Object.hasOwn(forPersistence(sensitive)[0],'notes'),false);
});

test('session-private notes never enter exported records',()=>{
  assert.equal(Object.hasOwn(forExport(sensitive)[0],'notes'),false);
});

test('ordinary application fields survive both boundaries',()=>{
  for(const record of [forPersistence(sensitive)[0],forExport(sensitive)[0]]){
    assert.equal(record.company,'Kōwhai Labs');
    assert.equal(record.nextAction,'Prepare questions');
    assert.equal(record.status,'Interview');
  }
});
