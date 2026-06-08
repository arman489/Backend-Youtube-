class ApiError extends Error {
    constructor(
        statuCode,
        message = "something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statuCode = statuCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = this.errors

        if(statck){
            this.stack =statck
        }else{
            Error.captureStackTrace(this,this.contructor)
        }

    }
}

module.exports = ApiError