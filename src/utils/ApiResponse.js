class ApiResponse{
constructor(statusCode,data,mesage = "success"){
    this.statusCode = statusCode
    this.data = data
    this.mesage = mesage // success or error   
    this.success = statusCode<400
}
}