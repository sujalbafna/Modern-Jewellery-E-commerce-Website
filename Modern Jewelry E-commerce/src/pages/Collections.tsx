import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { CollectionCard } from '../components/collections/CollectionCard';
import { Mail } from 'lucide-react';

const collections = [
  {
    id: '1',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '2',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '3',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '4',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '5',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '6',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '7',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '8',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '9',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '10',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '11',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602752275197-e8803937114c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '12',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '13',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '14',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602283076829-48145adabd87?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '15',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '16',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '17',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '18',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1599643478261-42fc9e0b8b3d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '19',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602283076836-8ab874c9dcef?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '20',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1600721391557-d446d8c6ed25?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '21',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '22',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602752275197-e8803937114c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '23',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '24',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '25',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '26',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1602283076829-48145adabd87?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '27',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '28',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '29',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '30',
    name: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
  },
];

export function Collections() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">Our Collections</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections featuring 30 unique pieces.
            </p>
          </div>

          {/* Collection Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-gray-900 mb-8 text-center">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-[#FDF8F6] rounded-lg">
                <h3 className="text-xl font-serif mb-2">Bridal Collection</h3>
                <p className="text-gray-600">Elegant pieces for your special day</p>
              </div>
              <div className="text-center p-6 bg-[#FDF8F6] rounded-lg">
                <h3 className="text-xl font-serif mb-2">Traditional Collection</h3>
                <p className="text-gray-600">Timeless ethnic designs</p>
              </div>
              <div className="text-center p-6 bg-[#FDF8F6] rounded-lg">
                <h3 className="text-xl font-serif mb-2">Contemporary Collection</h3>
                <p className="text-gray-600">Modern minimalist pieces</p>
              </div>
            </div>
          </div>

          {/* All Collections Grid - 3x3 with smaller images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="aspect-square">
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>

          {/* Email Section */}
          <div className="mt-24 bg-[#FDF8F6] rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="w-8 h-8 text-[#B76E79] mx-auto mb-4" />
              <h2 className="text-2xl font-serif text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our collections? Email us for personalized assistance.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B76E79] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#B76E79] text-white px-6 py-2 rounded-full hover:bg-[#A25D68] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}