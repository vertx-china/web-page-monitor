docker run -d --hostname my-rabbit --name some-rabbit  -p 15672:15672 -p 5671:5671 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=guest lgh06/rabbitmq-delayed