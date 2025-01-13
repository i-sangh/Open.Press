import React, { useState } from 'react';
import { format } from 'date-fns';
import { Search, Facebook, Linkedin, Share2, MessageCircle, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const blogData = {
    title: "The Cost of Innovation: Why India's Manufacturing Startups Battle to Stay Relevant",
    subtitle: "Startups in India - Overcoming the Double Burden of Limited Support and Stifled Innovation. Tier-2 City Entrepreneurs Fights Copycat Trends.",
    date: new Date('13-Jan-2025'),
    author: "Harsit Gowda",
    content: [
      {
        title: "The Success Stories of Indian Startups",
        content: `India’s startup scene is buzzing, isn’t it? When you think of names like Flipkart, Zomato, Ola, or BYJU'S, it’s hard not to feel a sense of pride. These companies have done what once seemed impossible—taken everyday problems and turned them into billion-dollar solutions. Flipkart redefined how we shop online, Zomato made food delivery a household norm, Ola gave us a solid reason to ditch traditional cabs, and BYJU'S made learning from home feel less like a chore and more like an experience. Together, they’ve put India firmly on the global startup map.
        Over the last decade, sectors like e-commerce, fintech, and edtech have exploded in growth. Investors are pouring money into these areas, and customers? They’re lapping it all up. Plus, with initiatives like Startup India, the government’s nudging more entrepreneurs to take the plunge. It’s exciting, right?
        But let’s take a moment to ask something important—are these startups truly creating something groundbreaking, or are they just tweaking ideas that have already worked elsewhere? Sure, adapting global concepts for India’s unique market is no small feat, but can we call it real innovation? That’s where things get interesting, especially when we start talking about manufacturing startups, which face a whole different set of challenges.`
      },

      {
        title: "The Lack of Originality in Indian Startups",
        content: `Let's be honest—when it comes to startups in India, there's a lot of brilliance, but originality? Well, that's often a different story. Think about it—Flipkart is basically India's answer to Amazon, Ola rides on the same wave as Uber, and Zomato? It's not that different from Yelp or Grubhub. This "copy-paste" trend isn't new, and it's not hard to see why it's so tempting. I mean, why reinvent the wheel when you can take a proven model, tweak it for Indian users, and make it work? It's lower risk, faster to market, and there's already a clear demand.

        But here's the downside: this copycat culture often limits creativity and leaves a lot of potential untapped. India is a country with unique challenges—think rural connectivity, small-scale manufacturing, or even basic access to healthcare in underserved areas. These are massive opportunities crying out for original solutions, yet many startups focus on what's already worked elsewhere. Sure, it's easier to pitch a model that's a "desi version" of a global success to investors, but isn't that playing it safe? When startups shy away from thinking outside the box, they miss out on creating innovations that could not only solve India's specific problems but also inspire the world.`
      },


      {
        title: "The Neglect of Manufacturing Startups",
        content: `Have you ever noticed how most of the buzz in India’s startup scene is about AI, fintech, or tech-driven platforms? Don’t get me wrong—these sectors are crucial, but what about manufacturing? It’s like the forgotten child of India’s startup ecosystem. Manufacturing startups have so much potential to tackle some of India’s biggest challenges, like creating millions of jobs or boosting our self-reliance in critical industries. Think about it—if India could make more of its own machinery, components, or tech hardware, wouldn’t that reduce our reliance on imports? It’s a no-brainer, right?
        But here’s the thing—starting up in manufacturing isn’t exactly a walk in the park. It’s not like coding an app where you just need a laptop and an internet connection. Manufacturing demands heavy investments, skilled labor, compliance with regulations, and, let’s face it, a lot of patience. Add to that the lack of government support, infrastructure bottlenecks, and a system that favors faster-return tech ventures, and you start to see why so many entrepreneurs shy away from it. Yet, if India is serious about "Make in India" or becoming a global powerhouse, we need to shine the spotlight on manufacturing startups and give them the support they deserve. Don’t you think it’s time we balanced the scales?`
      
      },


      {
        title: "The Tale of Mars Motors: A Tier-2 city Startup, Vision for Modular EVs in India",
        content: `Sanghapal Mangale, an ambitious engineer from the median city Dhule, Maharashtra, is the kind of person who reminds you why innovation is such a bold journey. With a background in engineering and a passion for building practical yet groundbreaking solutions, he was always a step ahead in his college projects. After graduating, Sanghapal worked with a two-wheeler startup in Hyderabad, where he uncovered a hard truth about the Indian EV market—most small electric vehicles in the country were little more than Chinese imports assembled in India and falsely labeled as "Made in India."

        Driven by the desire to engineer something genuinely innovative and homegrown, Sanghapal set his sights on the license-less scooter segment. These vehicles, classified as bicycles but equipped with the comfort and features of scooters, intrigued him. But he didn't stop at just making a scooter; he aimed higher—to create a modular EV scooter. Imagine a scooter that you could customize with minimal effort: a setup to carry luggage, an option to comfortably ride with a co-passenger, or even a sleek single-rider mode. It wasn't just a scooter—it was a vehicle tailored to fit the diverse needs of Indian consumers.

        As he further proceeds, He noticed the irony in the market. Products like OLA and Ather, both startups founded by IIT alumni, have captured attention despite their high prices. OLA, despite its reports of poor build quality, continues to sell well because of its tech-loaded features and mass appeal. On the other hand, Ather, with its high-quality manufacturing and technology, has carved a niche but hasn't scaled like OLA. It's a clear sign that the Indian market isn't just about innovation or engineering; it's about understanding consumer habits, trust, and visibility.`
      },
      {
        title: "Cultural and Consumer Resistance to Innovation",
        content: `Let's face it—Indians can be a bit conservative when it comes to trying out new things, especially products. We like sticking to what works. If a product has been around for a while and has a proven track record, we're more likely to trust it. Now, imagine being a startup trying to introduce something completely new—something people haven't seen before. It's tough, right? Consumers often hesitate to take that leap of faith, and that hesitation can make or break a fledgling business.

        And here's the kicker: innovation doesn't come cheap. New ideas require research, development, and often higher production costs, so startups have to price their products accordingly. But for Indian consumers, pricing is a huge deal. Even if the product is groundbreaking, the higher cost is often a dealbreaker, especially when there's a cheaper, more familiar alternative sitting right next to it. It's a vicious cycle—startups can't scale to bring down costs unless people buy in, but people won't buy in because it's too expensive.

        Compare this to Western markets, where consumers are far more open to innovation. They're eager to test out new technologies and ideas, whether it's the latest gadget, app, or service. Companies in those markets get the breathing room to experiment, fail, and refine their offerings. In India, though, that kind of open-mindedness isn't as widespread, which can feel like an uphill battle for startups trying to break the mold.`
      },


      {
        title: "Funding Challenges for Unique Ideas",
        content: `Let’s talk about money—because, honestly, it’s the lifeline of any startup. In India, if you have a business idea that’s already been proven somewhere else, chances are you’ll find investors lining up to fund you. But if your idea is something truly original, something untested? That’s where things get tricky. Investors in India tend to play it safe. They’re looking for low-risk opportunities with quick returns, which makes sense from a business standpoint, but it leaves bold innovators out in the cold.
        Think about it—building something entirely new means there’s no guarantee it’ll work. It takes time, patience, and a lot of trial and error. But Indian investors often aren’t willing to wait for those long-term payoffs. This cautious approach has caused many promising startups to fall through the cracks. Take Kno.e.s, for instance—a Pune-based social shopping platform that aimed to revolutionize e-commerce with AI-driven recommendations. Despite its potential, the startup had to shut down in 2018 due to a lack of financial backing to scale.
        The irony is that these groundbreaking ideas, if nurtured, could be the very innovations that put India ahead in the global market. Yet, the ecosystem often pushes entrepreneurs toward “safer bets” instead of encouraging them to take the kind of risks that lead to real breakthroughs. If we’re serious about fostering innovation, we need investors who are willing to bet on the unknown, don’t you think?`
      
      },


      {
        title: "Government Policies and Their Impact",
        content: `Government policies can make or break industries, and electric two-wheelers in India are a prime example of this. Remember when the sector was booming thanks to subsidies under the FAME II scheme? Affordable pricing and incentives made EVs a no-brainer for consumers and sparked massive growth for startups like Ather Energy and Ola Electric. But when the government cut back on those subsidies, sales plummeted. It was like slamming the brakes on an industry that had just started gaining momentum.
        This isn’t just about EVs; it’s a pattern we see across manufacturing startups. Inconsistent policies create a rollercoaster effect—one day, you’re riding high on government support, and the next, you’re scrambling to stay afloat. For manufacturing startups that already face high costs and long timelines, these policy U-turns can be devastating. They need predictability to plan and scale, but without it, they’re constantly playing catch-up.
        Imagine if the government doubled down on supporting manufacturing entrepreneurs instead. Subsidies, tax breaks, or even easy-access loans could make a world of difference. It’s not just about keeping businesses alive; it’s about fueling innovation, creating jobs, and reducing reliance on imports. If India truly wants to become a manufacturing hub, consistent and forward-thinking policies aren’t just helpful—they’re essential. Wouldn’t you agree?`
      
      },


      {
        title: "The Way Forward for Indian Startups",
        content: `At the end of the day, we're all rooting for the same thing—India's growth. Startups are a vital part of that journey, but there's always room to do better. To truly thrive, we need to start valuing innovation, not just replication. It's time to celebrate the risk-takers who dare to think differently and create something the world hasn't seen before. That's not just good for them—it's good for all of us.

        We also need to make the ecosystem more inclusive. Entrepreneurs from Tier-2 cities deserve the same access to mentorship, funding, and resources as their metro counterparts. Imagine the ideas that could come to life if we unlocked the potential hidden in smaller cities. The same goes for underrepresented sectors like manufacturing, which are crucial for job creation and self-reliance. Stronger, more consistent government policies—think subsidies, incentives, and easier access to credit—could give these industries the boost they desperately need.

        No one in this country is against startups. In fact, we all cheer for their success because their success is India's success. But pointing out the gaps isn't criticism—it's a step toward improvement. If we address these challenges together, we can build an ecosystem where startups don't just survive but truly flourish, making India a global leader in innovation. After all, isn't that what we all want?`
      }

    ]
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl w-full mx-auto flex justify-between px-6 h-16">
          <div className="flex-1 flex items-center">
            <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
              <UserCircle className="h-6 w-6 text-gray-600" />
            </Link>
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 flex items-center">Open Press</h1>
          <div className="flex-1 flex justify-end items-center">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="mr-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              {blogData.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{blogData.subtitle}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <time>{format(blogData.date, 'MMMM d, yyyy')}</time>
                <span>•</span>
                <span>{blogData.author}</span>
              </div>
              <div className="flex gap-4">
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} 
                  className="p-2 hover:bg-gray-100 rounded-full">
                  <Facebook className="h-5 w-5 text-gray-600" />
                </button>
                <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')} 
                  className="p-2 hover:bg-gray-100 rounded-full">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </button>
                <button onClick={() => window.open(`https://wa.me/?text=${window.location.href}`, '_blank')} 
                  className="p-2 hover:bg-gray-100 rounded-full">
                  <MessageCircle className="h-5 w-5 text-gray-600" />
                </button>
                <button onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }} className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Advertisement Banner */}
          <div className="w-full h-24 bg-gray-100 mb-8 flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-gray-400 text-sm">Advertisement ✖</span>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src="/startup-founder.jpg" 
              alt="Startup Founder" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 italic">Source: Analytics India Magazine</p>
          </div>

          {/* Article Content */}
          <article className="prose prose-sm md:prose-lg lg:prose-xl max-w-none w-full px-0 mx-auto">
            {blogData.content.map((section, index) => (
              <div key={index} className="mb-8 w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{section.title}</h3>
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  paragraph.trim() && (
                    <p key={`${index}-${pIndex}`} className="mb-4 text-base md:text-lg text-gray-700 max-w-none">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            ))}
          </article>

          {/* Related Articles Section */}
          <div className="my-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold">OPINIONS & BLOGS</h3>
              <a href="#" className="text-gray-600 hover:text-gray-900">READ MORE: OPINIONS & BLOGS {'>>'}</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <a href="https://www.wionews.com/opinions/defying-the-odds-can-indias-indigenous-amca-secure-a-foothold-in-the-6th-generation-fighter-jet-echelon-8604310" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/jet.jpg" alt="AMCA Fighter Jet" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <span className="text-sm text-gray-400 mb-2 block">OPINIONS & BLOGS</span>
                  <h4 className="text-lg font-semibold mb-2 text-black">Defying the Odds: Can India's Indigenous AMCA Secure a Foothold in the 6th Generation Fighter Jet Echelon?</h4>
                  <p className="text-sm text-gray-600 mb-2">Developed by the Defense Research and Development Organization (DRDO) and the Indian Air Force (IAF), the AMCA is designed to go beyond the capabilities of a typical 5th-generation fighter jet.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By Girish Linganna</span>
                    <span className="mx-2">•</span>
                    <span>Jan 09, 2025 14:22 IST</span>
                  </div>
                </div>
              </a>

              {/* Article 2 */}
              <a href="https://www.wionews.com/entertainment/lifestyle/how-i-overcame-the-fear-of-heights-by-learning-how-to-paraglide-8584892" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/paraglaiding.jpg" alt="Paragliding" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <span className="text-sm text-gray-400 mb-2 block">LIFESTYLE</span>
                  <h4 className="text-lg font-semibold mb-2 text-black">How I overcame the fear of heights by learning how to paraglide</h4>
                  <p className="text-sm text-gray-600 mb-2">Vidhi Bubna writes about her experience of overcoming her fear of heights by learning how to paraglide in Kamshet, a few hours away from Mumbai.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By Vidhi Bubna</span>
                    <span className="mx-2">•</span>
                    <span>Jan 02, 2025 13:41 IST</span>
                  </div>
                </div>
              </a>

              {/* Article 3 */}
              <a href="https://www.wionews.com/opinions/america-visa-h1b-visa-american-visa-for-indians-americas-h1b-protectionism-is-set-to-benefit-india-8580394" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/visa.jpg" alt="H1B Visa" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <span className="text-sm text-gray-400 mb-2 block">OPINIONS & BLOGS</span>
                  <h4 className="text-lg font-semibold mb-2 text-black">America's H1B protectionism is set to benefit India. Here's why</h4>
                  <p className="text-sm text-gray-600 mb-2">Indians seeking H1B work visas in the US may lose out on new opportunities, but in an economic sense, those very opportunities may shift to India like it did in the 1990s and 2000s.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By Madhavan Narayanan</span>
                    <span className="mx-2">•</span>
                    <span>Dec 31, 2024 13:52 IST</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Advertisement */}
          <div className="w-full bg-gray-100 my-8 p-4 border border-gray-200 rounded-lg">
            <span className="text-gray-400 text-sm mb-4 block">Advertisement</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Ad */}
              <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer">
                <img 
                  src="/jeep.jpg" 
                  alt="Used Jeep" 
                  className="w-32 h-24 object-cover"
                />
                <div className="p-3">
                  <div className="text-xs bg-red-500 text-white w-8 px-1 rounded mb-1">AD</div>
                  <h4 className="text-sm font-medium text-gray-900">Used jeeps in Mumbai are sold for cheap at just...</h4>
                </div>
              </div>

              {/* Second Ad */}
              <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer">
                <img 
                  src="/property.jpg" 
                  alt="Dubai Property" 
                  className="w-32 h-24 object-cover"
                />
                <div className="p-3">
                  <div className="text-xs bg-red-500 text-white w-8 px-1 rounded mb-1">AD</div>
                  <h4 className="text-sm font-medium text-gray-900">Price of Owning a House in Dubai might surprise you. You can get it just for...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white mt-auto py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/advertise" className="hover:text-gray-300">Advertise with us</Link></li>
            </ul>
          </div>

          {/* Privacy Section */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">Privacy</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-gray-300">Cookies Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-span-2 md:col-span-4 text-center mt-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Open Press. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;