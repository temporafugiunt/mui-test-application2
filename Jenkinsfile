@Library('freebyTech')_

import com.freebyTech.BuildInfo

String versionPrefix = '1.0'
String repository = 'k8s-tests'    
String imageName = 'mui-test-app2'
String dockerBuildArguments = ''
BuildInfo buildInfo

node 
{
  buildInfo = build(this, versionPrefix, repository, imageName, dockerBuildArguments, true, true)

  getApproval(imageName, 'None\nBoth\ndev\nqa')

  if(!'None'.equalsIgnoreCase(env.NAMESPACE)) 
  {
    if('Both'.equalsIgnoreCase(env.NAMESPACE))
    {
      env.NAMESPACE = 'dev';
      deploy(buildInfo, repository, imageName)
      env.NAMESPACE = 'qa';
      deploy(buildInfo, repository, imageName)
    }
    else 
    {
      deploy(buildInfo, repository, imageName)
    }    
  }
}

