module "test-server" {
  source = "./node-server"

  ami-id = "ami-0947d2ba12ee1ff75"
  key-pair = aws_key_pair.microservices-demo-key.key_name
  name = "Test Server"
}