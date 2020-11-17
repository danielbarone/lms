resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "lms-app-microservices-demo-${var.app-name}-deployment"
}