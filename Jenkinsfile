pipeline {
  agent any
  tools {
    nodejs '18.14.2'
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {
    stage('Installations') {
      steps {
        sh 'npm install'
      }
    }
    stage('Testing') {
      steps {
        sh 'npm test'
      }
    } 
    stage("Only Main") {
        when {
            branch 'main*'
        }
        steps {
            sh 'echo "Only main"'
        }
    }
  }
}