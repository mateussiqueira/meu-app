import Testimonial from '../../domain/entities/Testimonial';

export interface TestimonialDataSource {
    getTestimonials(): Promise<Testimonial[]>;
}

export class MockTestimonialDataSource implements TestimonialDataSource {
    async getTestimonials(): Promise<Testimonial[]> {
        // Simulando uma chamada a API ou banco de dados
        return [
            {
                id: '1',
                customerName: 'João Silva',
                customerCompany: 'Café Aroma',
                testimonialText: 'Aumentamos em 40% o retorno dos clientes após usar o Fidelity!',
                avatarUrl: '/images/avatar1.png'
            },
            {
                id: '2',
                customerName: 'Maria Costa',
                customerCompany: 'Salão Beauty',
                testimonialText: 'Sistema super fácil de usar. Os clientes adoram acumular pontos!',
                avatarUrl: '/images/avatar2.png'
            },
            {
                id: '3',
                customerName: 'Pedro Santos',
                customerCompany: 'Pet Shop Amigo',
                testimonialText: 'Ferramenta excelente para fidelizar. Suporte muito atencioso!',
                avatarUrl: '/images/avatar3.png'
            }
        ];
    }
}

export default TestimonialDataSource;