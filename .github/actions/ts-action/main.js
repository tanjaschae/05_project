const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run(){
   const javaVersion = core.getInput('java-version')
   const distribution = core.getInput('distribution', {required: true})
   const javaPackage = core.getInput('java-package')


   core.notice(`First try with ${javaVersion} ${distribution} ${javaPackage}`);
}

run();