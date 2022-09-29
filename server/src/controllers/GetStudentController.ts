import { Request, Response } from 'express';
import { GetStudentService } from '../services/GetStudentService';
// import { CreateStudentService } from '../services/CreateStudentService';

export class GetStudentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getStudentService = new GetStudentService();

        const student = await getStudentService.execute({ id });

        return response.json(student);
    }
}
