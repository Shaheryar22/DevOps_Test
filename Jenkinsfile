pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Shaheryar22/DevOps_Test'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Build & Start Services') {
            steps {
                sh 'docker compose up -d --build'
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo "🚀 Fullstack App with DB Deployed Successfully"
        }
        failure {
            echo "❌ Deployment Failed"
        }
    }
}
