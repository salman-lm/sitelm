import React, { useState, useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolSection from './components/ToolSection';
import AboutSection from './components/AboutSection';
import { INITIAL_VIDEO_TOOLS, INITIAL_IMAGE_TOOLS, LONG_VIDEO_TOOLS, VIRAL_SHORT_TOOLS, AUDIO_TOOLS } from './constants';
import ToolCard from './components/ToolCard';
import ScrollToTopButton from './components/ScrollToTopButton';
import ExplorePage from './components/ExplorePage';
import type { Tool } from './constants';
import ToolDetailsPage from './components/ToolDetailsPage';
import MaintenancePopup from './components/MaintenancePopup';

// START: Component Definitions for Pages and Footer

const AllToolsPage: React.FC<{
  toolType: string;
  onNavigate: (pageState: { page: string; tool?: Tool; toolType?: string; }) => void;
}> = ({ toolType, onNavigate }) => {
  const toolsSource = toolType === 'Video' 
    ? INITIAL_VIDEO_TOOLS 
    : toolType === 'Image' 
    ? INITIAL_IMAGE_TOOLS
    : toolType === 'Viral Shorts'
    ? VIRAL_SHORT_TOOLS
    : toolType === 'Audio'
    ? AUDIO_TOOLS
    : LONG_VIDEO_TOOLS;
  
  const title = `All ${toolType} Tools`;
  const description = `Explore our complete collection of AI-powered ${toolType.toLowerCase()} generation tools.`;

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {title}
          </h1>
          <p className="text-lg text-gray-400">{description}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {toolsSource.map((tool, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
            >
              <ToolCard tool={tool} onNavigate={onNavigate} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => onNavigate({ page: 'home' })} className="text-gray-300 hover:text-white transition-colors">&larr; Back to Home</button>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ onNavigate: (pageState: { page: string }) => void }> = ({ onNavigate }) => {
  const handleAboutClick = () => {
    onNavigate({ page: 'home' });
    setTimeout(() => {
        const header = document.querySelector('header');
        const targetElement = document.getElementById('about-us');
        if (targetElement && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = 20; // Provides 20px of space between header and section
            
            window.scrollTo({
                top: targetPosition - headerHeight - offset,
                behavior: 'smooth'
            });
        }
    }, 100);
  };

  return (
    <footer className="relative z-10 text-center py-8 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} AILM.in. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400">
          <button onClick={handleAboutClick} className="hover:text-white transition-colors">About Us</button>
          <button onClick={() => onNavigate({ page: 'terms' })} className="hover:text-white transition-colors">Terms and Conditions</button>
          <button onClick={() => onNavigate({ page: 'privacy' })} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => onNavigate({ page: 'contact' })} className="hover:text-white transition-colors">Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

const HomePage: React.FC<{ 
  onNavigate: (pageState: { page: string; toolType?: string; tool?: Tool }) => void;
}> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <ToolSection
          id="video-tools"
          title="Turn Your Text or Images into High Quality Videos"
          description="Create cinematic masterpieces, engaging social media clips, and detailed product demos from simple text prompts or existing footage. These tools are redefining video production."
          tools={INITIAL_VIDEO_TOOLS}
          toolType="Video"
          onNavigate={onNavigate}
          underlineColor="#3b82f6"
        />
        <div className="my-16 sm:my-24"></div>
        <ToolSection
          id="viral-video-tools"
          title="Create Viral Videos in Seconds with AI"
          description="Go viral with minimal effort. These tools help you repurpose long-form content into engaging, shareable short videos perfect for social media."
          tools={LONG_VIDEO_TOOLS}
          toolType="Long Video"
          onNavigate={onNavigate}
          underlineColor="#22d3ee"
        />
        <div className="my-16 sm:my-24"></div>
        <ToolSection
          id="viral-shorts-tools"
          title="Turn videos into viral shorts"
          description="Automatically find the most engaging parts of your long-form content and transform them into captivating, shareable shorts ready for social media."
          tools={VIRAL_SHORT_TOOLS}
          toolType="Viral Shorts"
          onNavigate={onNavigate}
          underlineColor="#f472b6"
        />
        <div className="my-16 sm:my-24"></div>
        <ToolSection
          id="voice-tools"
          title="Text To Realistic Voice"
          description="Transform any text into natural-sounding speech with AI-powered voice generators. Perfect for podcasts, audiobooks, and accessibility."
          tools={AUDIO_TOOLS}
          toolType="Audio"
          onNavigate={onNavigate}
          underlineColor="#10b981"
        />
        <div className="my-16 sm:my-24"></div>
        <AboutSection />
      </main>
    </>
  );
};

const ContentPageLayout: React.FC<{ title: string; children: React.ReactNode; onNavigate: (pageState: { page: string }) => void }> = ({ title, children, onNavigate }) => (
  <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        {title}
      </h1>
      <div className="glass-card rounded-xl p-6 md:p-10">
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
          {children}
        </div>
      </div>
      <div className="mt-12 text-center">
          <button onClick={() => onNavigate({ page: 'home' })} className="text-gray-300 hover:text-white transition-colors">&larr; Back to Home</button>
      </div>
    </div>
  </div>
);

const TermsPage: React.FC<{ onNavigate: (pageState: { page: string }) => void }> = ({ onNavigate }) => {
  return (
    <ContentPageLayout title="Terms and Conditions" onNavigate={onNavigate}>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>Welcome to AILM.in. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.</p>
      <h2 className="text-2xl font-bold text-gray-100">Affiliate Links and Third-Party Services</h2>
      <p>AILM.in provides a curated list of artificial intelligence tools. Many of the links on our website are affiliate links, which means we may earn a commission if you click on the link or make a purchase using the link. When you click on an affiliate link, you will be redirected to a third-party website. We do not own or control these third-party tools or websites. Your use of these third-party services is subject to their own terms and conditions and privacy policies. We are not responsible for the content, policies, or practices of any third-party websites or services.</p>
      <h2 className="text-2xl font-bold text-gray-100">Intellectual Property</h2>
      <p>The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of AILM.in and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of AILM.in.</p>
      <h2 className="text-2xl font-bold text-gray-100">Limitation of Liability</h2>
      <p>In no event shall AILM.in, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
      <h2 className="text-2xl font-bold text-gray-100">Changes</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
      <h2 className="text-2xl font-bold text-gray-100">Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at support@ailm.in.</p>
    </ContentPageLayout>
  );
};

const PrivacyPage: React.FC<{ onNavigate: (pageState: { page: string }) => void }> = ({ onNavigate }) => {
  return (
    <ContentPageLayout title="Privacy Policy" onNavigate={onNavigate}>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>AILM.in ("us", "we", or "our") operates the https://ailm.in website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
      <h2 className="text-2xl font-bold text-gray-100">Information Collection and Use</h2>
      <p>We do not collect any personally identifiable information from visitors to our site. Our website serves as a curated directory and does not require user registration or personal data submission to browse.</p>
      <h2 className="text-2xl font-bold text-gray-100">Log Data and Cookies</h2>
      <p>We do not use cookies to track user activity. We may collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics. This data is collected for analytical purposes to improve our service and is not linked to any personally identifiable information.</p>
      <h2 className="text-2xl font-bold text-gray-100">Third-Party Services</h2>
      <p>Our Service contains links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
      <h2 className="text-2xl font-bold text-gray-100">Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
      <h2 className="text-2xl font-bold text-gray-100">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us: support@ailm.in.</p>
    </ContentPageLayout>
  );
};

const ContactPage: React.FC<{ onNavigate: (pageState: { page: string }) => void }> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">Have questions or feedback? We'd love to hear from you. Reach out to our team, and we'll get back to you as soon as possible.</p>
        <div className="glass-card rounded-xl p-8 inline-block">
          <p className="text-gray-300 mb-2">For support and inquiries, email us at:</p>
          <a href="mailto:support@ailm.in" className="text-2xl font-semibold text-blue-400 hover:text-purple-500 transition-colors duration-300">support@ailm.in</a>
        </div>
        <div className="mt-12">
            <button onClick={() => onNavigate({ page: 'home' })} className="text-gray-300 hover:text-white transition-colors">&larr; Back to Home</button>
        </div>
      </div>
    </div>
  );
};

// END: Component Definitions

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<{ page: string; toolType?: string; tool?: Tool }>({ page: 'home' });
  const [searchQuery, setSearchQuery] = useState('');
  const [isMaintenanceMode] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage.page, currentPage.tool?.name]);

  const handleNavigate = (pageState: { page: string; toolType?: string; tool?: Tool }) => {
    setCurrentPage(pageState);
  };

  const renderPage = () => {
    const { page, toolType, tool } = currentPage;
    switch (page) {
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'all-tools':
        return <AllToolsPage toolType={toolType!} onNavigate={handleNavigate} />;
      case 'explore':
        return <ExplorePage onNavigate={handleNavigate} />;
      case 'tool-details':
        return <ToolDetailsPage tool={tool!} onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-transparent min-h-screen text-white">
      {isMaintenanceMode && <MaintenancePopup />}
      <div className={`transition-all duration-500 ${isMaintenanceMode ? 'blur-lg pointer-events-none' : ''}`}>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header 
            onNavigate={handleNavigate}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex-grow">
            {renderPage()}
          </div>
          <Footer onNavigate={handleNavigate} />
        </div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;