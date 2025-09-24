import { StreamingPlatform } from '../components/PlatformCard';

// Media information interface
export interface MediaInfo {
  title: string;
  year: string;
  type: 'movie' | 'series';
  genre: string[];
  rating: string;
  description: string;
  poster: string;
  platforms: StreamingPlatform[];
}

// Mock streaming platforms data for Canada
export const mockStreamingPlatforms: StreamingPlatform[] = [
  {
    name: "Netflix",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    link: "https://netflix.com",
    price: "CAD $16.49/month",
    quality: ["4K", "HDR"],
    availability: "subscription",
    region: "CA"
  },
  {
    name: "Crave",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Crave-Logo.png",
    link: "https://crave.ca",
    price: "CAD $19.99/month",
    quality: ["HD"],
    availability: "subscription",
    region: "CA"
  },
  {
    name: "Paramount+",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Paramount-Plus-Logo.png",
    link: "https://paramountplus.com",
    price: "CAD $5.99/month",
    quality: ["4K", "HD"],
    availability: "subscription",
    region: "CA"
  },
  {
    name: "Disney+",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Disney-Plus-Logo.png",
    link: "https://disneyplus.com",
    price: "CAD $11.99/month",
    quality: ["4K", "HDR"],
    availability: "subscription",
    region: "CA"
  },
  {
    name: "Apple TV+",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-TV-Logo.png",
    link: "https://tv.apple.com",
    price: "CAD $8.99/month",
    quality: ["4K", "HDR"],
    availability: "subscription",
    region: "CA"
  },
  {
    name: "Amazon Prime Video",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Prime-Video-Logo.png",
    link: "https://primevideo.com",
    price: "CAD $9.99/month",
    quality: ["4K", "HD"],
    availability: "subscription",
    region: "CA"
  }
];

// Mock media database
export const mockMediaDatabase: Record<string, MediaInfo> = {
  "stranger things": {
    title: "Stranger Things",
    year: "2016-2025",
    type: "series",
    genre: ["Sci-Fi", "Horror", "Drama"],
    rating: "TV-14",
    description: "A group of kids in a small town uncover supernatural mysteries and government conspiracies.",
    poster: "https://images.unsplash.com/photo-1579353174740-9e4e39428d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhbmdlciUyMHRoaW5ncyUyMHBvc3RlciUyMG5ldGZsaXh8ZW58MXx8fHwxNzU4NTk4MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[0]]
  },
  "the office": {
    title: "The Office",
    year: "2005-2013",
    type: "series",
    genre: ["Comedy", "Mockumentary"],
    rating: "TV-14",
    description: "A mockumentary about the daily lives of office employees in Scranton, Pennsylvania.",
    poster: "https://images.unsplash.com/photo-1710429112585-68a9c850a8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGUlMjBvZmZpY2UlMjB0diUyMHNob3clMjBwb3N0ZXJ8ZW58MXx8fHwxNzU4NTk4MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[0], mockStreamingPlatforms[5]]
  },
  "game of thrones": {
    title: "Game of Thrones",
    year: "2011-2019",
    type: "series",
    genre: ["Fantasy", "Drama", "Action"],
    rating: "TV-MA",
    description: "Noble families fight for control of the Iron Throne in the Seven Kingdoms of Westeros.",
    poster: "https://images.unsplash.com/photo-1742893989685-afbfcf3b18e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwb2YlMjB0aHJvbmVzJTIwcG9zdGVyJTIwaGJvfGVufDF8fHx8MTc1ODU5ODM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[1]]
  },
  "the mandalorian": {
    title: "The Mandalorian",
    year: "2019-2023",
    type: "series",
    genre: ["Sci-Fi", "Action", "Adventure"],
    rating: "TV-14",
    description: "A bounty hunter navigates the outer reaches of the galaxy, far from the authority of the New Republic.",
    poster: "https://images.unsplash.com/photo-1734540812292-621bcba95b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYWxvcmlhbiUyMHN0YXIlMjB3YXJzJTIwcG9zdGVyfGVufDF8fHx8MTc1ODU5ODM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[3]]
  },
  "ted lasso": {
    title: "Ted Lasso",
    year: "2020-2023",
    type: "series",
    genre: ["Comedy", "Sports", "Drama"],
    rating: "TV-MA",
    description: "An American football coach is hired to coach a British soccer team, despite having no experience.",
    poster: "https://images.unsplash.com/photo-1594854094685-24273329bb91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWQlMjBsYXNzbyUyMGFwcGxlJTIwdHYlMjBwb3N0ZXJ8ZW58MXx8fHwxNzU4NTk4MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[4]]
  },
  "breaking bad": {
    title: "Breaking Bad",
    year: "2008-2013",
    type: "series",
    genre: ["Crime", "Drama", "Thriller"],
    rating: "TV-MA",
    description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.",
    poster: "https://images.unsplash.com/photo-1644589104137-19a8b9f55aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGJhZCUyMHR2JTIwc2VyaWVzJTIwcG9zdGVyfGVufDF8fHx8MTc1ODU5ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: mockStreamingPlatforms.slice(0, 3)
  }
};

// Mock API search function
export const searchContent = async (query: string): Promise<MediaInfo | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate random errors occasionally
  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch streaming data. Please try again.");
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  
  // Return mock results based on query
  for (const [title, mediaInfo] of Object.entries(mockMediaDatabase)) {
    if (normalizedQuery.includes(title) || title.includes(normalizedQuery)) {
      return mediaInfo;
    }
  }
  
  // Return null if no matches found
  return null;
};