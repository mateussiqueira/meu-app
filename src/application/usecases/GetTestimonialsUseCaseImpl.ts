import TestimonialRepository from "../../data/repositories/TestimonialRepository";
import Testimonial from "../../domain/entities/Testimonial";
import { GetTestimonialsUseCase } from "../../domain/usecases/GetTestimonialsUseCase";

export class GetTestimonialsUseCaseImpl implements GetTestimonialsUseCase {
    private testimonialRepository: TestimonialRepository;

    constructor(testimonialRepository: TestimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    async execute(): Promise<Testimonial[]> {
        return this.testimonialRepository.getTestimonials();
    }
}

export default GetTestimonialsUseCaseImpl;