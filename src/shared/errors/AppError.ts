class AppError {

    public readonly status:number;
    public readonly message: string;

    constructor(message: string, status: number) {
        this.message = message;
        this.status = status;
    }
}

export { AppError }