const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of wealth, love, and the American Dream in the 1920s.",
    gender: "Fiction",
    category: "Classic"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice and moral growth in the American South.",
    gender: "Fiction",
    category: "Classic"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance.",
    gender: "Fiction",
    category: "Science Fiction"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel about the Bennett family and their five unmarried daughters.",
    gender: "Fiction",
    category: "Romance"
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure about Bilbo Baggins and his quest to reclaim treasure.",
    gender: "Fiction",
    category: "Fantasy"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A story about teenage rebellion and alienation.",
    gender: "Fiction",
    category: "Coming-of-age"
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy adventure about the quest to destroy the One Ring.",
    gender: "Fiction",
    category: "Fantasy"
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical book about following your dreams.",
    gender: "Fiction",
    category: "Inspirational"
  },
  {
    id: 9,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "A mystery thriller about a symbologist's quest to solve a murder.",
    gender: "Fiction",
    category: "Thriller"
  },
  {
    id: 10,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description: "The first book in the Harry Potter series about a young wizard.",
    gender: "Fiction",
    category: "Fantasy"
  },
  {
    id: 11,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description: "A dystopian novel about a televised fight to the death.",
    gender: "Fiction",
    category: "Young Adult"
  },
  {
    id: 12,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description: "A crime novel about a journalist and a hacker investigating a disappearance.",
    gender: "Fiction",
    category: "Mystery"
  },
  {
    id: 13,
    title: "The Shining",
    author: "Stephen King",
    description: "A horror novel about a family's terrifying experience in an isolated hotel.",
    gender: "Fiction",
    category: "Horror"
  },
  {
    id: 14,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel about a futuristic society based on technological control.",
    gender: "Fiction",
    category: "Science Fiction"
  },
  {
    id: 15,
    title: "The Road",
    author: "Cormac McCarthy",
    description: "A post-apocalyptic novel about a father and son's journey to survive.",
    gender: "Fiction",
    category: "Dystopian"
  },
  {
    id: 16,
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "A psychological thriller about a woman's disappearance and her husband's involvement.",
    gender: "Fiction",
    category: "Thriller"
  },
  {
    id: 17,
    title: "The Book Thief",
    author: "Markus Zusak",
    description: "A story about a young girl living in Nazi Germany who steals books.",
    gender: "Fiction",
    category: "Historical Fiction"
  },
  {
    id: 18,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
    gender: "Fiction",
    category: "Thriller"
  },
  {
    id: 19,
    title: "The Martian",
    author: "Andy Weir",
    description: "A science fiction novel about an astronaut stranded on Mars.",
    gender: "Fiction",
    category: "Science Fiction"
  },
  {
    id: 20,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    description: "A fantasy novel about a magical competition between two young illusionists.",
    gender: "Fiction",
    category: "Fantasy"
  },
  {
    id: 21,
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about a woman who leaves her survivalist family to pursue education.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 22,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind, exploring the evolution of our species.",
    gender: "Non-Fiction",
    category: "History"
  },
  {
    id: 23,
    title: "Becoming",
    author: "Michelle Obama",
    description: "A memoir by the former First Lady of the United States.",
    gender: "Non-Fiction",
    category: "Autobiography"
  },
  {
    id: 24,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A self-help book that advises finding meaning in important things.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 25,
    title: "Atomic Habits",
    author: "James Clear",
    description: "A guide to building good habits and breaking bad ones.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 26,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment through living in the present moment.",
    gender: "Non-Fiction",
    category: "Spirituality"
  },
  {
    id: 27,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A book about the two systems that drive the way we think.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 28,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    description: "A self-help book presenting a principle-centered approach for solving personal and professional problems.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 29,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    description: "A self-help book offering a code of conduct based on ancient Toltec wisdom.",
    gender: "Non-Fiction",
    category: "Spirituality"
  },
  {
    id: 30,
    title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    author: "Susan Cain",
    description: "A book about the power of introverts in a culture that favors extroverts.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 31,
    title: "The Art of War",
    author: "Sun Tzu",
    description: "An ancient Chinese military treatise on strategy and tactics.",
    gender: "Non-Fiction",
    category: "Strategy"
  },
  {
    id: 32,
    title: "Outliers",
    author: "Malcolm Gladwell",
    description: "A book exploring the factors that contribute to high levels of success.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 33,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "A book about how to create and manage successful startups.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 34,
    title: "Good to Great",
    author: "Jim Collins",
    description: "A management book about how companies transition from being good to great.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 35,
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    description: "A business book about how successful companies can do everything right and still lose their market leadership.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 36,
    title: "Freakonomics",
    author: "Steven D. Levitt, Stephen J. Dubner",
    description: "A book that explores the hidden side of everything using economic principles.",
    gender: "Non-Fiction",
    category: "Economics"
  },
  {
    id: 37,
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    description: "A book about how little things can make a big difference.",
    gender: "Non-Fiction",
    category: "Sociology"
  },
  {
    id: 38,
    title: "Blink",
    author: "Malcolm Gladwell",
    description: "A book about the power of thinking without thinking.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 39,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    description: "A book that distills 3,000 years of power into 48 laws.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 40,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    description: "A self-help book about interpersonal communication and skills.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 41,
    title: "The Happiness Project",
    author: "Gretchen Rubin",
    description: "A memoir about the author's year-long quest to discover what leads to true happiness.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 42,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A memoir about the author's experiences in Nazi concentration camps and his psychotherapeutic method.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 43,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "A book about how trauma affects the body and mind, and innovative treatments for recovery.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 44,
    title: "The Untethered Soul",
    author: "Michael A. Singer",
    description: "A spiritual guide to inner freedom and happiness.",
    gender: "Non-Fiction",
    category: "Spirituality"
  },
  {
    id: 45,
    title: "The Life-Changing Magic of Tidying Up",
    author: "Marie Kondo",
    description: "A guide to decluttering and organizing your home.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 46,
    title: "The 5 Love Languages",
    author: "Gary Chapman",
    description: "A book about how people express and receive love in different ways.",
    gender: "Non-Fiction",
    category: "Relationships"
  },
  {
    id: 47,
    title: "Daring Greatly",
    author: "Brené Brown",
    description: "A book about the power of vulnerability in our lives.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 48,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    description: "A book about the science behind why we do what we do and how to change.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 49,
    title: "Mindset",
    author: "Carol S. Dweck",
    description: "A book about the difference between a fixed and growth mindset.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 50,
    title: "The Miracle Morning",
    author: "Hal Elrod",
    description: "A self-help book about creating a morning routine to transform your life.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 51,
    title: "The War of Art",
    author: "Steven Pressfield",
    description: "A book about overcoming resistance and unlocking your creative potential.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 52,
    title: "Deep Work",
    author: "Cal Newport",
    description: "A book about the benefits of focused work in an increasingly distracted world.",
    gender: "Non-Fiction",
    category: "Productivity"
  },
  {
    id: 53,
    title: "Essentialism",
    author: "Greg McKeown",
    description: "A book about the disciplined pursuit of less but better.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 54,
    title: "The One Thing",
    author: "Gary Keller, Jay Papasan",
    description: "A book about focusing on what matters most for success.",
    gender: "Non-Fiction",
    category: "Productivity"
  },
  {
    id: 55,
    title: "Grit",
    author: "Angela Duckworth",
    description: "A book about the power of passion and perseverance.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 56,
    title: "Start with Why",
    author: "Simon Sinek",
    description: "A book about how great leaders inspire everyone to take action.",
    gender: "Non-Fiction",
    category: "Leadership"
  },
  {
    id: 57,
    title: "The 10X Rule",
    author: "Grant Cardone",
    description: "A book about achieving success by setting targets ten times what you think you can achieve.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 58,
    title: "Crushing It!",
    author: "Gary Vaynerchuk",
    description: "A book about how great entrepreneurs build their business and influence.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 59,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "A book about financial education and building wealth.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 60,
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    description: "A book about getting out of debt and achieving financial fitness.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 61,
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley, William D. Danko",
    description: "A book about the surprising traits of America's wealthy.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 62,
    title: "Your Money or Your Life",
    author: "Vicki Robin, Joe Dominguez",
    description: "A book about transforming your relationship with money and achieving financial independence.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 63,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    description: "A book about value investing and long-term strategies.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 64,
    title: "A Random Walk Down Wall Street",
    author: "Burton G. Malkiel",
    description: "A book about investing strategies and market behavior.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 65,
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    description: "A book about the simplest and most effective investment strategy.",
    gender: "Non-Fiction",
    category: "Finance"
  },
  {
    id: 66,
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    description: "A book about escaping the 9-5, living anywhere, and joining the new rich.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 67,
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    description: "A book about why most small businesses don't work and what to do about it.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 68,
    title: "Zero to One",
    author: "Peter Thiel, Blake Masters",
    description: "A book about how to build companies that create new things.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 69,
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    description: "A book about building a business when there are no easy answers.",
    gender: "Non-Fiction",
    category: "Business"
  },
  {
    id: 70,
    title: "Lean In",
    author: "Sheryl Sandberg",
    description: "A book about women, work, and the will to lead.",
    gender: "Non-Fiction",
    category: "Leadership"
  },
  {
    id: 71,
    title: "Drive",
    author: "Daniel H. Pink",
    description: "A book about the surprising truth about what motivates us.",
    gender: "Non-Fiction",
    category: "Psychology"
  },
  {
    id: 72,
    title: "The 80/20 Principle",
    author: "Richard Koch",
    description: "A book about achieving more with less.",
    gender: "Non-Fiction",
    category: "Productivity"
  },
  {
    id: 73,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    description: "A book about owning your morning and elevating your life.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 74,
    title: "The Compound Effect",
    author: "Darren Hardy",
    description: "A book about the power of small, consistent actions over time.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 75,
    title: "The Art of Happiness",
    author: "Dalai Lama, Howard Cutler",
    description: "A book about finding happiness in everyday life.",
    gender: "Non-Fiction",
    category: "Spirituality"
  },
  {
    id: 76,
    title: "The Seven Spiritual Laws of Success",
    author: "Deepak Chopra",
    description: "A book about spiritual principles for achieving success.",
    gender: "Non-Fiction",
    category: "Spirituality"
  },
  {
    id: 77,
    title: "The Celestine Prophecy",
    author: "James Redfield",
    description: "A spiritual adventure novel about discovering life's hidden truths.",
    gender: "Fiction",
    category: "Spiritual"
  },
  {
    id: 78,
    title: "The Secret",
    author: "Rhonda Byrne",
    description: "A book about the law of attraction and how thoughts can change your life.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 79,
    title: "You Are a Badass",
    author: "Jen Sincero",
    description: "A self-help book about how to stop doubting your greatness and start living an awesome life.",
    gender: "Non-Fiction",
    category: "Self-Help"
  },
  {
    id: 80,
    title: "Big Magic",
    author: "Elizabeth Gilbert",
    description: "A book about creative living beyond fear.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 81,
    title: "The Artist's Way",
    author: "Julia Cameron",
    description: "A book about recovering your creative self.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 82,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    description: "A book about how to be creative in the digital age.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 83,
    title: "Show Your Work!",
    author: "Austin Kleon",
    description: "A book about how to share your creativity and get discovered.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 84,
    title: "The War of Art",
    author: "Steven Pressfield",
    description: "A book about overcoming resistance and unlocking your creative potential.",
    gender: "Non-Fiction",
    category: "Creativity"
  },
  {
    id: 85,
    title: "Bird by Bird",
    author: "Anne Lamott",
    description: "A book about writing and life.",
    gender: "Non-Fiction",
    category: "Writing"
  },
  {
    id: 86,
    title: "On Writing",
    author: "Stephen King",
    description: "A memoir and guide to the craft of writing.",
    gender: "Non-Fiction",
    category: "Writing"
  },
  {
    id: 87,
    title: "The Elements of Style",
    author: "William Strunk Jr., E.B. White",
    description: "A guide to writing clear and effective English.",
    gender: "Non-Fiction",
    category: "Writing"
  },
  {
    id: 88,
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    description: "A memoir about a woman's journey of self-discovery across Italy, India, and Indonesia.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 89,
    title: "Wild",
    author: "Cheryl Strayed",
    description: "A memoir about a woman's solo hike along the Pacific Crest Trail.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 90,
    title: "Into the Wild",
    author: "Jon Krakauer",
    description: "A biography about Christopher McCandless, who ventured into the Alaskan wilderness.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 91,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    description: "The diary of a Jewish girl hiding during the Nazi occupation of the Netherlands.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 92,
    title: "Born a Crime",
    author: "Trevor Noah",
    description: "A memoir about growing up biracial in apartheid South Africa.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 93,
    title: "The Glass Castle",
    author: "Jeannette Walls",
    description: "A memoir about a dysfunctional family and resilience.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 94,
    title: "Angela's Ashes",
    author: "Frank McCourt",
    description: "A memoir about growing up in extreme poverty in Ireland.",
    gender: "Non-Fiction",
    category: "Memoir"
  },
  {
    id: 95,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    description: "A biography about the woman whose cells were used for medical research without her knowledge.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 96,
    title: "Unbroken",
    author: "Laura Hillenbrand",
    description: "A biography of Louis Zamperini, an Olympic runner and WWII prisoner of war survivor.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 97,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    description: "A biography of Apple co-founder Steve Jobs.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 98,
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    description: "A biography of Albert Einstein.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 99,
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "A biography of the inventors of the airplane.",
    gender: "Non-Fiction",
    category: "Biography"
  },
  {
    id: 100,
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    description: "A biography of American Founding Father Alexander Hamilton.",
    gender: "Non-Fiction",
    category: "Biography"
  }
];

module.exports = {
    books
}