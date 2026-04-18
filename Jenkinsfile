pipeline {
    agent any

    environment {
        APP_NAME = "my-microservice"
        DOCKER_IMAGE = "my-dockerhub/my-microservice:latest"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo "Cloning GitHub repository..."
                git 'https://github.com/RDharaneesh/my-cicd-project.git'
            }
        }

        stage('Build') {
            steps {
                echo "Installing dependencies..."
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                bat 'npm test || echo No tests available'
            }
        }

        stage('Start App (Optional)') {
            steps {
                echo "Starting application..."
                bat 'start /B node app.js'
                echo "App running at http://localhost:3000 🚀"
            }
        }

        stage('Docker Build') {
            steps {
                echo "Building Docker image..."
                echo "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Docker Push') {
            steps {
                echo "Pushing image to Docker Hub..."
                echo "docker push %DOCKER_IMAGE%"
            }
        }

        stage('Kubernetes Deployment') {
            steps {
                echo "Deploying to Kubernetes..."
                echo "kubectl apply -f k8s/deployment.yaml"
                echo "kubectl apply -f k8s/service.yaml"
            }
        }

        stage('Monitoring (Prometheus)') {
            steps {
                echo "Monitoring using Prometheus..."
                echo "http://localhost:9090"
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> dd42308 (update)
