FROM golang:1.27

WORKDIR /usr/src/app
EXPOSE 8080

COPY . .
RUN go build

RUN go test ./

ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:8080

CMD ["./server"]
