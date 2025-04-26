import Testimonial from '../../domain/entities/Testimonial';
import { TestimonialDataSource } from '../datasources/TestimonialDataSource';
import TestimonialRepository from './TestimonialRepository';

export class TestimonialRepositoryImpl implements TestimonialRepository {
    private dataSource: TestimonialDataSource;

    constructor(dataSource: TestimonialDataSource) {
        this.dataSource = dataSource;
    }

    async getTestimonials(): Promise<Testimonial[]> {
        return this.dataSource.getTestimonials();
    }
}

export default TestimonialRepositoryImpl;