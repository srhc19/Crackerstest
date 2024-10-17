export interface Course {
    id: number;
    title: string;
    category: string;
    instructor: string;
    rating: number;
    price: number;
    imageUrl: string;
  }
  
  export const COURSES: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      category: 'Development',
      instructor: 'John Doe',
      rating: 4.5,
      price: 49.99,
      imageUrl: 'downloadAngular_img.png'
    },
    {
      id: 2,
      title: 'Mastering React',
      category: 'Development',
      instructor: 'Jane Smith',
      rating: 4.7,
      price: 59.99,
      imageUrl: 'downloadreact_img.png'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      category: 'Data Science',
      instructor: 'Alice Johnson',
      rating: 4.8,
      price: 69.99,
      imageUrl: 'downloadpython_img.jpeg'
    },
    {
      id: 4,
      title: 'UI/UX Design Essentials',
      category: 'Design',
      instructor: 'Emily Davis',
      rating: 4.6,
      price: 39.99,
      imageUrl: 'downloaduiux_img.jpeg'
    }
  ];
  