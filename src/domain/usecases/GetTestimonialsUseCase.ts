import Testimonial from '../entities/Testimonial';

export interface GetTestimonialsUseCase {
    execute(): Promise<Testimonial[]>;
}