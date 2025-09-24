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
  seasons?: { season: number; rating: number }[];
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
    platforms: [mockStreamingPlatforms[0]],
    seasons: [
      { season: 1, rating: 8.7 },
      { season: 2, rating: 8.2 },
      { season: 3, rating: 8.5 },
      { season: 4, rating: 9.1 },
    ],
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
  },
  "curb your enthusiasm": {
    title: "Curb Your Enthusiasm",
    year: "2000-2024",
    type: "series",
    genre: ["Comedy"],
    rating: "TV-MA",
    description: "The life and times of Larry David and the predicaments he gets himself into with his friends and complete strangers.",
    poster: "https://images.unsplash.com/photo-1644589104137-19a8b9f55aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGJhZCUyMHR2JTIwc2VyaWVzJTIwcG9zdGVyfGVufDF8fHx8MTc1ODU5ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[1]]
  },
  "gilmore girls": {
    title: "Gilmore Girls",
    year: "2000-2007",
    type: "series",
    genre: ["Comedy", "Drama"],
    rating: "TV-PG",
    description: "A dramedy centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.",
    poster: "https://images.unsplash.com/photo-1644589104137-19a8b9f55aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGJhZCUyMHR2JTIwc2VyaWVzJTIwcG9zdGVyfGVufDF8fHx8MTc1ODU5ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[0]]
  },
  "the sopranos": {
    title: "The Sopranos",
    year: "1999-2007",
    type: "series",
    genre: ["Crime", "Drama"],
    rating: "TV-MA",
    description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    poster: "https://images.unsplash.com/photo-1644589104137-19a8b9f55aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGJhZCUyMHR2JTIwc2VyaWVzJTIwcG9zdGVyfGVufDF8fHx8MTc1ODU5ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[1]]
  },
  "six feet under": {
    title: "Six Feet Under",
    year: "2001-2005",
    type: "series",
    genre: ["Drama", "Comedy"],
    rating: "TV-MA",
    description: "A dysfunctional family running an independent funeral home in Los Angeles.",
    poster: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXglMjBmZWV0JTIwdW5kZXIlMjB0diUyMHNlcmllcyUyMHNvZmElMjBwb3N0ZXJ8ZW58MXx8fHwxNzU4NTk4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[1]]
  },
  "24": {
    title: "24",
    year: "2001-2010",
    type: "series",
    genre: ["Action", "Drama", "Thriller"],
    rating: "TV-14",
    description: "Counter-terrorist agent Jack Bauer races against the clock to subvert terrorist plots and save his nation from disaster.",
    poster: "https://images.unsplash.com/photo-1519125323398-675f0558da8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpZ2h0JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTg1OTgzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[3]]
  },
  "the wire": {
    title: "The Wire",
    year: "2002-2008",
    type: "series",
    genre: ["Crime", "Drama", "Thriller"],
    rating: "TV-MA",
    description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement officers.",
    poster: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGUlMjB3aXJlJTIwdHYlMjBzZXJpZXMlMjBwb3N0ZXJ8ZW58MXx8fHwxNzU4NTk4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platforms: [mockStreamingPlatforms[1]]
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