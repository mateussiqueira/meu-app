import Testimonial from '../../domain/entities/Testimonial';

export interface TestimonialRepository {
    getTestimonials(): Promise<Testimonial[]>;
}

export default TestimonialRepository;