'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign,
  BarChart3,
  Megaphone,
  Zap,
  Award,
  Briefcase,
  MessageCircle,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  Users as Users2,
  TrendingUp as TrendingUp2,
  Lightbulb as LightbulbIcon,
  Scale,
  TrendingDown,
  Eye,
  ShoppingCart as ShoppingCartIcon,
  Weight,
  MessageSquare,
  Globe,
  MapPin,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerContainer from '@/components/StaggerContainer';
import ParallaxSection from '@/components/ParallaxSection';
import FloatingElement from '@/components/FloatingElement';
import PulseElement from '@/components/PulseElement';
import PageLoader from '@/components/PageLoader';
import SkillBar from '@/components/SkillBar';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Portfolio() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('https://formspree.io/f/meolbrwd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Contact Form Submission from ${formData.name}`,
          }),
        });

        if (response.ok) {
          toast({
            title: t.toastSuccess,
            description: currentLang === 'en' ? "I'll get back to you within 24 hours." : "سأتواصل معك خلال 24 ساعة.",
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        toast({
          title: t.toastSubmissionError,
          description: t.toastSubmissionErrorDesc,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: t.toastError,
        variant: "destructive",
      });
    }
  };

  const translations = {
    en: {
      title: "Michael Zahy",
      subtitle: "Media Buyer & Performance Marketing",
      about: "About Me",
      aboutDesc: "Strategic media buyer focused on delivering measurable results",
      aboutText1: "I'm Michael Zahy, a passionate Media Buyer & Performance Marketing specialist with hands-on experience in creating and managing effective digital advertising campaigns. I specialize in Facebook and Instagram advertising, helping businesses achieve their marketing objectives through data-driven strategies.",
      aboutText2: "My approach combines creative thinking with analytical skills to optimize campaigns for maximum ROI. I'm committed to staying updated with the latest digital marketing trends and continuously improving my expertise in media buying and performance marketing.",
      resultsDriven: "Results-Driven",
      dataFocused: "Data-Focused",
      clientCentric: "Client-Centric",
      innovative: "Innovative",
      adSpend: "Ad Spend Managed",
      roiIncrease: "Avg. ROI Increase",
      campaigns: "Campaigns Managed",
      experience: "Years Experience",
      skills: "Skills & Expertise",
      skillsDesc: "Comprehensive digital marketing and media buying capabilities",
      facebookAds: "Facebook Advertising",
      campaignSetup: "Campaign Setup & Management",
      adCreative: "Ad Creative Optimization",
      audienceTargeting: "Audience Targeting",
      abTesting: "A/B Testing",
      analytics: "Analytics & Optimization",
      performanceAnalysis: "Performance Analysis",
      roiOptimization: "ROI Optimization",
      conversionTracking: "Conversion Tracking",
      budgetManagement: "Budget Management",
      digitalMarketing: "Digital Marketing",
      socialMedia: "Social Media Marketing",
      contentStrategy: "Content Strategy",
      brandAwareness: "Brand Awareness",
      leadGeneration: "Lead Generation",
      strategy: "Strategy & Planning",
      mediaPlanning: "Media Planning",
      campaignStrategy: "Campaign Strategy",
      marketResearch: "Market Research",
      competitiveAnalysis: "Competitive Analysis",
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
      services: "Services",
      servicesDesc: "Comprehensive media buying and performance marketing solutions",
      facebookAdsService: "Meta Ads Management",
      facebookAdsDesc: "Complete Facebook & Instagram advertising campaign management from strategy to optimization.",
      campaignOptimization: "Campaign Optimization",
      campaignOptimizationDesc: "Data-driven optimization to maximize ROI and improve campaign performance.",
      audienceTargetingService: "Audience Targeting",
      audienceTargetingDesc: "Precise audience targeting to reach your ideal customers effectively.",
      socialMediaStrategy: "Social Media Strategy",
      socialMediaStrategyDesc: "Comprehensive social media strategies to boost brand presence and engagement.",
      performanceAnalytics: "Performance Analytics",
      performanceAnalyticsDesc: "In-depth analysis and reporting on campaign performance and key metrics.",
      budgetManagementService: "Budget Management",
      budgetManagementDesc: "Strategic budget allocation and management for optimal ad spend efficiency.",
      learnMore: "Learn More",
      contact: "Let's Work Together",
      contactDesc: "Ready to elevate your digital advertising performance?",
      getInTouch: "Get In Touch",
      getInTouchDesc: "Let's discuss how we can help grow your business through effective media buying strategies.",
      sendMessage: "Send a Message",
      sendMessageDesc: "Fill out the form below and I'll get back to you within 24 hours.",
      name: "Name",
      email: "Email",
      message: "Message",
      yourName: "Your Name",
      yourEmail: "your@email.com",
      tellMe: "Tell me about your project...",
      sendButton: "Send Message",
      viewWork: "View My Work",
      getInTouchButton: "Get In Touch",
      facebook: "Facebook Ads",
      performanceMarketing: "Performance Marketing",
      mediaBuying: "Media Buying",
      growth: "Growth Hacking",
      heroText: "Passionate media buyer dedicated to delivering measurable results through strategic digital advertising campaigns and data-driven performance marketing.",
      emailContact: "Michaelzahy1@gmail.com",
      phoneContact: "+20 1069720311",
      linkedinContact: "linkedin.com/in/michael-zahy",
      facebookContact: "facebook.com/MichaelZahy1",
      footerText: "© 2024 Michael Zahy. All rights reserved. | Media Buyer & Performance Marketing Specialist",
      toastSuccess: "Message sent successfully!",
      toastError: "Please fill in all fields",
      toastSubmissionError: "Submission Error",
      toastSubmissionErrorDesc: "Please try again later or contact me directly via email.",
      whatsapp: "WhatsApp",
      whatsappMe: "WhatsApp Me",
      caseStudies: "Case Studies",
      caseStudiesDesc: "Real results from real campaigns I've managed",
      caseStudy1Title: "Pharmacy Weight Gain Products",
      caseStudy1Desc: "Successfully marketed weight gain products for Dr. Remon Moner Pharmacy through targeted Facebook and Instagram campaigns",
      caseStudy1Result: "180% ROI Increase",
      caseStudy2Title: "E-commerce Fashion Brand",
      caseStudy2Desc: "Managed Facebook advertising campaigns for Egypt market focusing on conversion optimization",
      caseStudy2Result: "10.8 ROAS",
      caseStudy3Title: "Local Service Business",
      caseStudy3Desc: "Generated qualified leads for local service business through strategic Facebook advertising",
      caseStudy3Result: "60% Cost Reduction",
      pricing: "Pricing",
      pricingDesc: "Transparent pricing for all services",
      basicPlan: "Starter",
      basicPrice: "EGP 5,000",
      basicPeriod: "one-time",
      basicDesc: "Perfect for small businesses getting started with Facebook ads",
      basicFeature1: "1 Facebook Ad Campaign",
      basicFeature2: "Basic Audience Targeting",
      basicFeature3: "Weekly Performance Reports",
      basicFeature4: "Email Support",
      professionalPlan: "Professional",
      professionalPrice: "EGP 12,000",
      professionalPeriod: "one-time",
      professionalDesc: "Ideal for growing businesses needing comprehensive Facebook ad management",
      professionalFeature1: "3 Facebook Ad Campaigns",
      professionalFeature2: "Advanced Audience Targeting",
      professionalFeature3: "A/B Testing & Optimization",
      professionalFeature4: "Bi-weekly Strategy Calls",
      professionalFeature5: "Priority Support",
      enterprisePlan: "Enterprise",
      enterprisePrice: "EGP 25,000",
      enterprisePeriod: "one-time",
      enterpriseDesc: "For established businesses requiring full-scale performance marketing",
      enterpriseFeature1: "Unlimited Campaigns",
      enterpriseFeature2: "Meta Platform Management",
      enterpriseFeature3: "Custom Strategy Development",
      enterpriseFeature4: "Dedicated Account Manager",
      enterpriseFeature5: "24/7 Priority Support",
      enterpriseFeature6: "Monthly Strategy Meetings",
      contactForPricing: "Contact for Custom Pricing",
      choosePlan: "Choose Plan",
      popular: "Popular",
      // Case Study Details
      pharmacyCampaign: "Pharmacy Campaign Details",
      pharmacyObjective: "Marketing Objective",
      pharmacyObjectiveValue: "Conversion Campaign",
      pharmacyIndustry: "Industry",
      pharmacyIndustryValue: "E-commerce (Pharmacy)",
      pharmacyPlatform: "Platform",
      pharmacyPlatformValue: "Facebook & Instagram",
      pharmacyLocation: "Location",
      pharmacyLocationValue: "Egypt",
      pharmacyDuration: "Campaign Duration",
      pharmacyDurationValue: "3 Months",
      pharmacyPurchases: "Total Purchases",
      pharmacyPurchasesValue: "285 Orders",
      pharmacyCpp: "Cost Per Purchase",
      pharmacyCppValue: "EGP 45",
      pharmacySales: "Total Sales Revenue",
      pharmacySalesValue: "EGP 142,500",
      pharmacyAov: "Average Order Value",
      pharmacyAovValue: "EGP 500",
      pharmacyRoas: "Return on Ad Spend",
      pharmacyRoasValue: "11.1x",
      pharmacySpend: "Total Ad Spend",
      pharmacySpendValue: "EGP 12,825",
      pharmacyStrategy: "Strategy & Approach",
      pharmacyStrategyText: [
        "Developed targeted campaigns focusing on audience interested in weight gain and fitness solutions",
        "Created compelling ad creatives highlighting product benefits and offers",
        "Implemented retargeting campaigns for website visitors",
        "Continuously optimized based on performance data and analytics"
      ],
      pharmacyResults: "Key Results",
      pharmacyResult1: "Achieved 11.1x ROAS with EGP 142,500 in sales revenue",
      pharmacyResult2: "Generated 285 orders with average order value of EGP 500",
      pharmacyResult3: "Reduced cost per purchase by 35% through optimization",
      pharmacyResult4: "Increased brand awareness and customer engagement significantly",
    },
    ar: {
      title: "مايكل زاهي",
      subtitle: "خبير إعلانات مدفوعة ومتخصص في التسويق الرقمي",
      about: "عني",
      aboutDesc: "خبير استراتيجي في الإعلانات المدفوعة يحقق نتائج ملموسة للعلامات التجارية",
      aboutText1: "أنا مايكل زاهي، خبير إعلانات مدفوعة شغوف ومتخصص في التسويق الرقمي، أمتلك خبرة عملية في إنشاء وإدارة الحملات الإعلانية المدفوعة الفعالة. أتخصص في إعلانات فيسبوك وإنستغرام، وأساعد العلامات التجارية على تحقيق أهدافها التسويقية من خلال استراتيجيات مدعومة بالتحليلات.",
      aboutText2: "أسلوفي يجمع بين الإبداع والتحليلات لتطوير الحملات الإعلانية وتحقيق أعلى نسبة عائد على الإنفاق الإعلاني. ملتزم بمواكبة أحدث تقنيات التسويق الرقمي وتطوير خبراتي باستمرار في مجال الإعلانات المدفوعة والتسويق القائم على النتائج.",
      resultsDriven: "مدفوع بالنتائج",
      dataFocused: "مبني على البيانات",
      clientCentric: "مركز على العميل",
      innovative: "مبتكر",
      adSpend: "الإنفاق الإعلاني المُدار",
      roiIncrease: "متوسط زيادة العائد",
      campaigns: "عدد العملاء +15",
      experience: "شهور الخبرة",
      skills: "المهارات والخبرات",
      skillsDesc: "قدرات متكاملة في التسويق الرقمي والإعلانات المدفوعة",
      facebookAds: "إعلانات فيسبوك",
      campaignSetup: "إدارة وتجهيز الحملات",
      adCreative: "تطوير المواد الإعلانية",
      audienceTargeting: "استهداف الجمهور",
      abTesting: "اختبار A/B",
      analytics: "التحليلات والتطوير",
      performanceAnalysis: "تحليل الأداء",
      roiOptimization: "تحسين العائد على الإنفاق",
      conversionTracking: "تتبع التحويلات",
      budgetManagement: "إدارة الميزانية",
      digitalMarketing: "التسويق الرقمي",
      socialMedia: "التسويق عبر وسائل التواصل",
      contentStrategy: "استراتيجية المحتوى",
      brandAwareness: "وعي العلامة التجارية",
      leadGeneration: "توليد العملاء المحتملين",
      strategy: "الاستراتيجية والتخطيط",
      mediaPlanning: "تخطيط الإعلانات",
      campaignStrategy: "استراتيجية الحملات",
      marketResearch: "أبحاث السوق",
      competitiveAnalysis: "التحليل التنافسي",
      expert: "خبير",
      advanced: "متقدم",
      intermediate: "متوسط",
      services: "الخدمات",
      servicesDesc: "حلول متكاملة في الإعلانات المدفوعة والتسويق القائم على النتائج",
      facebookAdsService: "إدارة منصات الإعلانات",
      facebookAdsDesc: "إدارة متكاملة لحملات فيسبوك وإنستغرام من الاستراتيجية إلى التطوير والتحسين.",
      campaignOptimization: "تطوير الحملات الإعلانية",
      campaignOptimizationDesc: "تطوير مدعوم بالبيانات لتحقيق أعلى عائد على الإنفاق الإعلاني وتعزيز أداء الحملات.",
      audienceTargetingService: "استهداف الجمهور",
      audienceTargetingDesc: "استهداف دقيق للفئات المستهدفة للوصول إلى العملاء المثاليين بكفاءة.",
      socialMediaStrategy: "استراتيجية وسائل التواصل",
      socialMediaStrategyDesc: "استراتيجيات شاملة لوسائل التواصل لتعزيز وجود العلامة التجارية وزيادة التفاعل.",
      performanceAnalytics: "تحليلات الأداء",
      performanceAnalyticsDesc: "تحليل متقدم وإعداد تقارير مفصلة عن أداء الحملات والمؤشرات الرئيسية.",
      budgetManagementService: "إدارة الميزانية",
      budgetManagementDesc: "تخطيط وإدارة استراتيجية للميزانية لتحقيق أقصى كفاءة للإنفاق الإعلاني.",
      learnMore: "اكتشف المزيد",
      contact: "لنبدأ العمل معاً",
      contactDesc: "هل أنت مستعد لتحقيق نتائج استثنائية من خلال إعلاناتك الرقمية؟",
      getInTouch: "تواصل معي",
      getInTouchDesc: "دعنا نناقش معاً كيف يمكننا مساعدة علامتك التجارية على النمو من خلال استراتيجيات الإعلانات المدفوعة الفعالة.",
      sendMessage: "أرسل رسالتك",
      sendMessageDesc: "املأ النموذج التالي وسأتواصل معك خلال 24 ساعة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      yourName: "اسمك",
      yourEmail: "بريدك الإلكتروني",
      tellMe: "أخبرني عن مشروعك...",
      sendButton: "إرسال الرسالة",
      viewWork: "شاهد أعمالي",
      getInTouchButton: "تواصل معي",
      facebook: "إعلانات فيسبوك",
      performanceMarketing: "التسويق القائم على النتائج",
      mediaBuying: "الإعلانات المدفوعة",
      growth: "نمو متسارع",
      heroText: "خبير إعلانات مدفوعة شغوف بتحقيق نتائج ملموسة من خلال الحملات الإعلانية الرقمية الاستراتيجية والتسويق القائم على البيانات.",
      emailContact: "Michaelzahy1@gmail.com",
      phoneContact: "+20 1069720311",
      linkedinContact: "linkedin.com/in/michael-zahy",
      facebookContact: "facebook.com/MichaelZahy1",
      footerText: "© 2024 مايكل زاهي. جميع الحقوق محفوظة. | خبير إعلانات مدفوعة ومتخصص في التسويق القائم على النتائج",
      toastSuccess: "تم إرسال الرسالة بنجاح!",
      toastError: "يرجى ملء كل الحقول",
      toastSubmissionError: "خطأ في الإرسال",
      toastSubmissionErrorDesc: "يرجى المحاولة مرة أخرى لاحقاً أو التواصل معي مباشرة عبر الإيميل.",
      whatsapp: "واتساب",
      whatsappMe: "واتساب",
      caseStudies: "دراسات الحالة",
      caseStudiesDesc: "نتائج حقيقية من حملات إعلانية مدفوعة حقيقية قمت بإدارتها",
      caseStudy1Title: "منتجات زيادة الوزن للصيدلية",
      caseStudy1Desc: "حملة تسويق ناجحة لمنتجات زيادة الوزن لصيدلية الدكتور ريمون مؤنس من خلال حملات فيسبوك وإنستغرام المستهدفة",
      caseStudy1Result: "زيادة العائد 180%",
      caseStudy2Title: "علامة تجارية للأزياء عبر الإنترنت",
      caseStudy2Desc: "إدارة حملات إعلانية على فيسبوك لسوق مصر مركزة على تحسين معدلات التحويل",
      caseStudy2Result: "عائد على الإنفاق الإعلاني 10.8",
      caseStudy3Title: "مشروع خدمة محلي",
      caseStudy3Desc: "توليد عملاء محتملين مؤهلين لمشروع خدمة محلي من خلال حملات فيسبوك الاستراتيجية",
      caseStudy3Result: "تخفيض التكلفة 60%",
      pricing: "الأسعار",
      pricingDesc: "أسعار شفافة ومرنة لجميع خدمات الإعلانات المدفوعة",
      basicPlan: "الباقة الأساسية",
      basicPrice: "5,000",
      basicPeriod: "لمرة واحدة",
      basicDesc: "مثالية للشركات الناشئة التي تبدأ رحلتها في عالم الإعلانات المدفوعة",
      basicFeature1: "حملة إعلانية مدفوعة واحدة على فيسبوك",
      basicFeature2: "استهداف أساسي للفئات المستهدفة",
      basicFeature3: "تقارير أداء أسبوعية",
      basicFeature4: "دعم عبر البريد الإلكتروني",
      professionalPlan: "الباقة الاحترافية",
      professionalPrice: "12,000",
      professionalPeriod: "لمرة واحدة",
      professionalDesc: "مثالية للشركات النامية التي تحتاج إلى إدارة متكاملة لحملاتها الإعلانية",
      professionalFeature1: "3 حملات إعلانية مدفوعة على فيسبوك",
      professionalFeature2: "استهداف متقدم للفئات المستهدفة",
      professionalFeature3: "اختبار A/B والتطوير المستمر",
      professionalFeature4: "مكالمات استراتيجية كل أسبوعين",
      professionalFeature5: "دعم مفضل",
      enterprisePlan: "الباقة المؤسسية",
      enterprisePrice: "25,000",
      enterprisePeriod: "لمرة واحدة",
      enterpriseDesc: "مصممة للشركات الراسخة التي تتطلب تسويقاً قائماً على النتائج على نطاق واسع",
      enterpriseFeature1: "حملات إعلانية غير محدودة",
      enterpriseFeature2: "إدارة منصات الإعلانات المتكاملة",
      enterpriseFeature3: "تطوير استراتيجيات مخصصة",
      enterpriseFeature4: "مدير حساب مخصص",
      enterpriseFeature5: "دعم مفضل على مدار الساعة",
      enterpriseFeature6: "اجتماعات استراتيجية شهرية",
      contactForPricing: "تواصل لأسعار مخصصة",
      choosePlan: "اختر الباقة",
      popular: "الأكثر شهرة",
      // Case Study Details
      pharmacyCampaign: "تفاصيل حملة الصيدلية",
      pharmacyObjective: "الهدف التسويقي",
      pharmacyObjectiveValue: "حملة تحويلات",
      pharmacyIndustry: "الصناعة",
      pharmacyIndustryValue: "التجارة الإلكترونية (صيدلية)",
      pharmacyPlatform: "المنصة",
      pharmacyPlatformValue: "فيسبوك وإنستغرام",
      pharmacyLocation: "الموقع",
      pharmacyLocationValue: "مصر",
      pharmacyDuration: "مدة الحملة",
      pharmacyDurationValue: "3 أشهر",
      pharmacyPurchases: "إجمالي المشتريات",
      pharmacyPurchasesValue: "285 عملية تحويل",
      pharmacyCpp: "التكلفة لكل عملية تحويل",
      pharmacyCppValue: "185 جنيه مصري",
      pharmacySales: "إجمالي الإيرادات من المبيعات",
      pharmacySalesValue: "142,500 جنيه مصري",
      pharmacyAov: "متوسط قيمة الطلب",
      pharmacyAovValue: "500 جنيه مصري",
      pharmacyRoas: "العائد على الإنفاق الإعلاني",
      pharmacyRoasValue: "2.8x",
      pharmacySpend: "إجمالي الإنفاق الإعلاني",
      pharmacySpendValue: "52,725 جنيه مصري",
      pharmacyStrategy: "الاستراتيجية والمنهج",
      pharmacyStrategyText: [
        "تطوير حملات إعلانية مستهدفة تركز على الفئات المهتمة بمنتجات زيادة الوزن والحلول اللياقية",
        "إنشاء مواد إعلانية إبداعية جذابة تسلط الضوء على فوائد المنتجات والعروض الترويجية",
        "تطبيق حملات إعادة استهداف لزوار صفحة الهبوط",
        "تطوير مستمر بناءً على تحليلات الأداء والبيانات"
      ],
      pharmacyResults: "النتائج الرئيسية",
      pharmacyResult1: "تحقيق عائد على الإنفاق الإعلاني 2.8x مع إيرادات مبيعات 142,500 جنيه مصري",
      pharmacyResult2: "توليد 285 عملية تحويل بمتوسط قيمة طلب 500 جنيه مصري",
      pharmacyResult3: "تخفيض التكلفة لكل عملية تحويل بنسبة 35% من خلال التطوير المستمر",
      pharmacyResult4: "زيادة وعي العلامة التجارية وتفاعل العملاء بشكل كبير",
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  const handleWhatsAppClick = () => {
    const message = currentLang === 'en' 
      ? "Hi Michael, I'm interested in your media buying services. Can we discuss?" 
      : "مرحباً مايكل، أنا مهتم بخدمات شراء الإعلانات الخاصة بك. هل يمكننا مناقشة ذلك؟";
    const whatsappUrl = `https://wa.me/201069720311?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/MichaelZahy1', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/michael-zahy', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:Michaelzahy1@gmail.com', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageLoader />
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"
        dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
        lang={currentLang}
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-16">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 0.9, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-25"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.h1 
                className={`${currentLang === 'ar' ? 'hero-title' : ''} text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                  {t.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {t.subtitle}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap justify-center gap-2 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <Badge variant="secondary" className="text-blue-900 bg-white/90">
                      {t.facebook}
                    </Badge>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <Badge variant="secondary" className="text-blue-900 bg-white/90">
                      {t.digitalMarketing}
                    </Badge>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 200 }}
                  >
                    <Badge variant="secondary" className="text-blue-900 bg-white/90">
                      {t.mediaBuying}
                    </Badge>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                  >
                    <Badge variant="secondary" className="text-blue-900 bg-white/90">
                      {t.growth}
                    </Badge>
                  </motion.div>
                </motion.div>
                <motion.p 
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {t.heroText}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => scrollToSection('case-studies')}
                  >
                    {t.viewWork}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => scrollToSection('contact')}
                >
                  {t.getInTouchButton}
                </Button>
              </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-blue-900/20 dark:to-indigo-900/20">
        {/* Section Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center mb-16 about-section">
                <div className="inline-flex items-center gap-2 mb-4 section-header-decoration">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">{t.about}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                </div>
                <h2 className={`${currentLang === 'ar' ? 'section-title' : ''} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans antialiased`}>
                  {t.about}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {t.aboutDesc}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" delay={0.2}>
                <div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    {t.aboutText1}
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    {t.aboutText2}
                  </p>
                  <StaggerContainer direction="up" staggerDelay={0.1} className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                        <Target className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-slate-700 dark:text-slate-300">{t.resultsDriven}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </motion.div>
                      <span className="text-slate-700 dark:text-slate-300">{t.dataFocused}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                        <Users className="w-5 h-5 text-purple-600" />
                      </motion.div>
                      <span className="text-slate-700 dark:text-slate-300">{t.clientCentric}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                        <Zap className="w-5 h-5 text-yellow-600" />
                      </motion.div>
                      <span className="text-slate-700 dark:text-slate-300">{t.innovative}</span>
                    </div>
                  </StaggerContainer>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        </motion.div>
                        <div className="stats-number text-2xl font-bold text-slate-800 dark:text-slate-100">EGP 200K+</div>
                        <div className="stats-label text-sm text-slate-600 dark:text-slate-400">{t.adSpend}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <motion.div
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        </motion.div>
                        <div className="stats-number text-2xl font-bold text-slate-800 dark:text-slate-100">3.2x</div>
                        <div className="stats-label text-sm text-slate-600 dark:text-slate-400">{t.roiIncrease}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                        >
                          <Megaphone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        </motion.div>
                        <div className="stats-number text-2xl font-bold text-slate-800 dark:text-slate-100">15+</div>
                        <div className="stats-label text-sm text-slate-600 dark:text-slate-400">{t.campaigns}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <motion.div
                          animate={{ rotate: [0, -15, 15, 0] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                        >
                          <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                        </motion.div>
                        <div className="stats-number text-2xl font-bold text-slate-800 dark:text-slate-100">1+</div>
                        <div className="stats-label text-sm text-slate-600 dark:text-slate-400">{t.experience}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 dark:from-slate-800 dark:via-blue-900/30 dark:to-indigo-900/30">
        {/* Section Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b5cf6' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15S0 21.7 0 30s6.7 15 15 15 15-6.7 15-15zm30 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 section-header">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-4 section-header-decoration">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.caseStudies}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                {t.caseStudies}
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                {t.caseStudiesDesc}
              </motion.p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-3 gap-8" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
              {/* Case Study 1 - Pharmacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white dark:bg-slate-800 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                        <Weight className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2 font-sans antialiased case-studies-title" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy1Title}
                      </CardTitle>
                      <CardDescription className="text-blue-100 font-sans antialiased case-studies-description" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy1Desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-lg mb-4" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <Star className="w-5 h-5" />
                      <span className="font-sans antialiased case-studies-result result-number" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.caseStudy1Result}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyPlatform}</span>
                        <span className="text-blue-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyPlatformValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyLocation}</span>
                        <span className="text-blue-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyLocationValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyDuration}</span>
                        <span className="text-blue-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyDurationValue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Case Study 2 - E-commerce */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full"
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white dark:bg-slate-800 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                        <ShoppingCartIcon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2 font-sans antialiased case-studies-title" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy2Title}
                      </CardTitle>
                      <CardDescription className="text-purple-100 font-sans antialiased case-studies-description" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy2Desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                    <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold text-lg mb-4" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <Star className="w-5 h-5" />
                      <span className="font-sans antialiased case-studies-result result-number" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.caseStudy2Result}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyPlatform}</span>
                        <span className="text-purple-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyPlatformValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyLocation}</span>
                        <span className="text-purple-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyLocationValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyObjective}</span>
                        <span className="text-purple-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyObjectiveValue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Case Study 3 - Local Service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-full"
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white dark:bg-slate-800 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                        <Users2 className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2 font-sans antialiased case-studies-title" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy3Title}
                      </CardTitle>
                      <CardDescription className="text-green-100 font-sans antialiased case-studies-description" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        {t.caseStudy3Desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                    <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-lg mb-4" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <Star className="w-5 h-5" />
                      <span className="font-sans antialiased case-studies-result result-number" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.caseStudy3Result}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyPlatform}</span>
                        <span className="text-green-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyPlatformValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyLocation}</span>
                        <span className="text-green-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyLocationValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
                        <span className="font-medium text-slate-700 dark:text-slate-300 font-sans antialiased text-sm case-studies-label" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pharmacyObjective}</span>
                        <span className="text-green-600 font-semibold font-sans antialiased text-sm case-studies-value numbers-container" dir="ltr">{t.pharmacyObjectiveValue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-blue-50/50 dark:from-slate-800 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Section Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm30 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center mb-16 section-header">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.skills}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {t.skills}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {t.skillsDesc}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={0.2}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}>
                          <Facebook className="w-5 h-5 text-blue-600" />
                        </motion.div>
                        {t.facebookAds}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <SkillBar skill={t.campaignSetup} level="advanced" delay={0.1} currentLang={currentLang} />
                        <SkillBar skill={t.adCreative} level="intermediate" delay={0.2} currentLang={currentLang} />
                        <SkillBar skill={t.audienceTargeting} level="advanced" delay={0.3} currentLang={currentLang} />
                        <SkillBar skill={t.abTesting} level="intermediate" delay={0.4} currentLang={currentLang} />
                      </div>
                  </CardContent>
                </Card>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        <motion.div whileHover={{ rotate: -15 }} transition={{ type: "spring", stiffness: 400 }}>
                          <BarChart3 className="w-5 h-5 text-green-600" />
                        </motion.div>
                        {t.analytics}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <SkillBar skill={t.performanceAnalysis} level="advanced" delay={0.5} currentLang={currentLang} />
                        <SkillBar skill={t.roiOptimization} level="intermediate" delay={0.6} currentLang={currentLang} />
                        <SkillBar skill={t.conversionTracking} level="advanced" delay={0.7} currentLang={currentLang} />
                        <SkillBar skill={t.budgetManagement} level="intermediate" delay={0.8} currentLang={currentLang} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.4}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}>
                          <Megaphone className="w-5 h-5 text-purple-600" />
                        </motion.div>
                        {t.digitalMarketing}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <SkillBar skill={t.socialMedia} level="advanced" delay={0.9} currentLang={currentLang} />
                        <SkillBar skill={t.contentStrategy} level="intermediate" delay={1.0} currentLang={currentLang} />
                        <SkillBar skill={t.brandAwareness} level="advanced" delay={1.1} currentLang={currentLang} />
                        <SkillBar skill={t.leadGeneration} level="intermediate" delay={1.2} currentLang={currentLang} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.5}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                        <motion.div whileHover={{ rotate: -15 }} transition={{ type: "spring", stiffness: 400 }}>
                          <Target className="w-5 h-5 text-blue-600" />
                        </motion.div>
                        {t.strategy}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <SkillBar skill={t.mediaPlanning} level="advanced" delay={1.3} currentLang={currentLang} />
                        <SkillBar skill={t.campaignStrategy} level="intermediate" delay={1.4} currentLang={currentLang} />
                        <SkillBar skill={t.marketResearch} level="advanced" delay={1.5} currentLang={currentLang} />
                        <SkillBar skill={t.competitiveAnalysis} level="intermediate" delay={1.6} currentLang={currentLang} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
              </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50/50 to-indigo-50/50 dark:from-slate-800 dark:via-purple-900/20 dark:to-indigo-900/20">
        {/* Section Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-13.8-11.2-25-25-25S0 36.2 0 50s11.2 25 25 25 25-11.2 25-25zm50 0c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center mb-16 section-header">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.services}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {t.services}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {t.servicesDesc}
                </p>
              </div>
            </ScrollReveal>
            <StaggerContainer direction="up" staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={3} delay={0}>
                      <PulseElement duration={2} delay={0.5}>
                        <Facebook className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 font-sans antialiased text-center">{t.facebookAdsService}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.facebookAdsDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={3.5} delay={0.2}>
                      <PulseElement duration={2.2} delay={0.7}>
                        <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-green-600 transition-colors duration-300 font-sans antialiased text-center">{t.campaignOptimization}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.campaignOptimizationDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-green-50 hover:text-green-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={4} delay={0.4}>
                      <PulseElement duration={2.4} delay={0.9}>
                        <Target className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-purple-600 transition-colors duration-300 font-sans antialiased text-center">{t.audienceTargetingService}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.audienceTargetingDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-purple-50 hover:text-purple-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={3.2} delay={0.6}>
                      <PulseElement duration={2.6} delay={1.1}>
                        <Megaphone className="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-red-600 transition-colors duration-300 font-sans antialiased text-center">{t.socialMediaStrategy}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.socialMediaStrategyDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={3.8} delay={0.8}>
                      <PulseElement duration={2.8} delay={1.3}>
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-yellow-600 transition-colors duration-300 font-sans antialiased text-center">{t.performanceAnalytics}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.performanceAnalyticsDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 h-full group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  <CardHeader className="text-center">
                    <FloatingElement duration={4.2} delay={1}>
                      <PulseElement duration={3} delay={1.5}>
                        <DollarSign className="w-12 h-12 mx-auto mb-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                      </PulseElement>
                    </FloatingElement>
                    <CardTitle className="group-hover:text-indigo-600 transition-colors duration-300 font-sans antialiased text-center">{t.budgetManagementService}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                      {t.budgetManagementDesc}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" onClick={() => scrollToSection('pricing')} className="hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300">
                        {t.learnMore}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-800 dark:via-indigo-900/20 dark:to-purple-900/20">
        {/* Section Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.02'%3E%3Cpath d='M60 60c0-16.6-13.4-30-30-30S0 43.4 0 60s13.4 30 30 30 30-13.4 30-30zm60 0c0-16.6-13.4-30-30-30s-30 13.4-30 30 13.4 30 30 30 30-13.4 30-30z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 section-header">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.pricing}</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
                </div>
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-sans antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                {t.pricing}
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
              >
                {t.pricingDesc}
              </motion.p>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="text-center flex-shrink-0 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                        {t.basicPlan}
                      </CardTitle>
                    </motion.div>
                    <motion.div 
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {t.basicPrice}
                      </motion.span>
                      <span className="text-slate-600 dark:text-slate-400 ml-2">{t.basicPeriod}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="mt-2 text-center">{t.basicDesc}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow relative z-10 min-h-[200px]">
                    {[
                      t.basicFeature1,
                      t.basicFeature2,
                      t.basicFeature3,
                      t.basicFeature4
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center gap-2 text-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </motion.div>
                        <span className="text-sm text-center">{feature}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                  <div className="p-6 pt-0 flex-shrink-0 relative z-10 mt-auto text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl" 
                        onClick={() => scrollToSection('contact')}
                      >
                        {t.choosePlan}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-blue-500 relative overflow-visible group pt-16 ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Popular badge with animation */}
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20 whitespace-nowrap overflow-visible text-center min-w-max"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {t.popular}
                  </motion.div>
                  
                  <CardHeader className="text-center flex-shrink-0 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                        {t.professionalPlan}
                      </CardTitle>
                    </motion.div>
                    <motion.div 
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {t.professionalPrice}
                      </motion.span>
                      <span className="text-slate-600 dark:text-slate-400 ml-2">{t.professionalPeriod}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="mt-2 text-center">{t.professionalDesc}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow relative z-10 min-h-[200px]">
                    {[
                      t.professionalFeature1,
                      t.professionalFeature2,
                      t.professionalFeature3,
                      t.professionalFeature4,
                      t.professionalFeature5
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </motion.div>
                        <span className="text-sm text-center">{feature}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                  <div className="p-6 pt-0 flex-shrink-0 relative z-10 mt-auto text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl" 
                        onClick={() => scrollToSection('contact')}
                      >
                        {t.choosePlan}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 relative overflow-hidden group ${currentLang === 'ar' ? 'rtl' : ''}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="text-center flex-shrink-0 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
                        {t.enterprisePlan}
                      </CardTitle>
                    </motion.div>
                    <motion.div 
                      className="mt-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {t.enterprisePrice}
                      </motion.span>
                      <span className="text-slate-600 dark:text-slate-400 ml-2">{t.enterprisePeriod}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="mt-2 text-center">{t.enterpriseDesc}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow relative z-10 min-h-[200px]">
                    {[
                      t.enterpriseFeature1,
                      t.enterpriseFeature2,
                      t.enterpriseFeature3,
                      t.enterpriseFeature4,
                      t.enterpriseFeature5,
                      t.enterpriseFeature6
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </motion.div>
                        <span className="text-sm text-center">{feature}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                  <div className="p-6 pt-0 flex-shrink-0 relative z-10 mt-auto text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl" 
                        onClick={() => scrollToSection('contact')}
                      >
                        {t.contactForPricing}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 section-header">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                {t.contact}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                {t.contactDesc}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.getInTouch}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.getInTouchDesc}</p>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-500 hover:border-blue-200 dark:hover:border-blue-400 cursor-pointer"
                         onClick={() => window.open('mailto:Michaelzahy1@gmail.com', '_blank')}>
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white mb-1">{t.email}</p>
                        <p className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300">
                          {currentLang === 'en' ? 'Click to email me' : 'اضغط للإرسال'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
  
                  {/* LinkedIn */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-500 hover:border-blue-200 dark:hover:border-blue-400 cursor-pointer"
                         onClick={() => window.open('https://www.linkedin.com/in/michael-zahy', '_blank')}>
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300">
                        <Linkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white mb-1">LinkedIn</p>
                        <p className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300">
                          {currentLang === 'en' ? 'View LinkedIn profile' : 'عرض الملف الشخصي'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Facebook */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-500 hover:border-blue-200 dark:hover:border-blue-400 cursor-pointer"
                         onClick={() => window.open('https://www.facebook.com/MichaelZahy1', '_blank')}>
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300">
                        <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white mb-1">Facebook</p>
                        <p className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300">
                          {currentLang === 'en' ? 'Visit Facebook page' : 'زيارة صفحة فيسبوك'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* WhatsApp */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-500 hover:border-green-200 dark:hover:border-green-400 cursor-pointer"
                         onClick={() => window.open('https://wa.me/201069720311', '_blank')}>
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:hover:bg-green-800/50 transition-all duration-300">
                        <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white mb-1">{t.whatsapp}</p>
                        <p className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors duration-300">
                          {currentLang === 'en' ? 'Chat on WhatsApp' : 'دردشة على واتساب'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.sendMessage}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>{t.sendMessageDesc}</p>
                
                <form 
                  onSubmit={handleSubmit}
                  method="POST"
                  action="https://formspree.io/f/meolbrwd"
                  id="contact-form"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      {t.name} *
                    </label>
                    <input 
                      type="text" 
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-sans antialiased"
                      placeholder={t.yourName}
                      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      {t.email} *
                    </label>
                    <input 
                      type="email" 
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-sans antialiased"
                      placeholder={t.yourEmail}
                      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2 font-sans antialiased" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                      <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      {t.message} *
                    </label>
                    <textarea 
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-sans antialiased"
                      placeholder={t.tellMe}
                      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button 
                      type="submit" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-5 h-5" />
                      {t.sendButton}
                    </motion.button>
                    <motion.a 
                      href="https://wa.me/201069720311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="w-5 h-5" />
                      {t.whatsappMe}
                    </motion.a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              {currentLang !== 'ar' && (
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Logo className="w-12 h-12" />
                  <h3 className="text-2xl font-bold">{t.title}</h3>
                </div>
              )}
              <p className="text-slate-300">{t.subtitle}</p>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <button 
                onClick={() => window.open('https://www.facebook.com/MichaelZahy1', '_blank')}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const message = currentLang === 'en' 
                    ? "Hi Michael, I'm interested in your media buying services. Can we discuss?" 
                    : "مرحباً مايكل، أنا مهتم بخدمات شراء الإعلانات الخاصة بك. هل يمكننا مناقشة ذلك؟";
                  const whatsappUrl = `https://wa.me/201069720311?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/michael-zahy', '_blank')}
                className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:Michaelzahy1@gmail.com'}
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400">
                {t.footerText}
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}