import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Program = {
  title: string;
  subtitle: string;
  details: string;
  icon: string;
};

type NewsItem = {
  date: string;
  title: string;
  summary: string;
};

type GalleryItem = {
  title: string;
  label: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mobileMenuOpen = false;
  successMessage = '';

  trustItems = [
    'برامج تعليمية متميزة',
    'معلمون مؤهلون',
    'بيئة تربوية محفزة',
    'متابعة مستمرة للطلاب'
  ];

  stats = [
    { value: '+450', label: 'طالب مستفيد' },
    { value: '+35', label: 'حلقة قرآنية' },
    { value: '+28', label: 'معلم ومشرف' },
    { value: '+80', label: 'خاتم ومتميز' }
  ];

  programs: Program[] = [
    {
      icon: '١',
      title: 'حلقات التحفيظ',
      subtitle: 'ابتدائي، متوسط، ثانوي',
      details: 'مسارات حفظ ومراجعة منظمة تراعي المرحلة العمرية ومستوى الطالب.'
    },
    {
      icon: '٢',
      title: 'تحسين التلاوة',
      subtitle: 'تصحيح القراءة والتجويد',
      details: 'برنامج عملي لضبط المخارج والصفات وتحسين الأداء القرآني.'
    },
    {
      icon: '٣',
      title: 'الإقراء والإجازة',
      subtitle: 'للمتقدمين والمتميزين',
      details: 'مسار متخصص للطلاب الراغبين في الإتقان العالي والسند القرآني.'
    },
    {
      icon: '٤',
      title: 'صناعة حافظ',
      subtitle: 'خطة متابعة مكثفة',
      details: 'برنامج مرحلي يجمع بين الحفظ، المراجعة، الاختبار، والتحفيز.'
    },
    {
      icon: '٥',
      title: 'حلقات الكبار',
      subtitle: 'للشباب والبالغين',
      details: 'حلقات مرنة تناسب أوقات الكبار مع متابعة فردية واضحة.'
    },
    {
      icon: '٦',
      title: 'البرامج الموسمية',
      subtitle: 'الصيف، عشر ذي الحجة، السبت القرآني',
      details: 'برامج قصيرة عالية الأثر خلال المواسم والإجازات.'
    }
  ];

  news: NewsItem[] = [
    {
      date: 'قريبًا',
      title: 'فتح التسجيل في البرامج القرآنية',
      summary: 'سيتم الإعلان عن مواعيد التسجيل وشروط الالتحاق عبر الموقع وقنوات التواصل.'
    },
    {
      date: 'قريبًا',
      title: 'إطلاق منصة الطالب',
      summary: 'متابعة الحضور ومستوى الحفظ والتواصل مع المعلم في لوحة واحدة.'
    },
    {
      date: 'قريبًا',
      title: 'تكريم الطلاب المتميزين',
      summary: 'احتفاء بالطلاب المتقدمين في الحفظ والتلاوة والانضباط.'
    }
  ];

  gallery: GalleryItem[] = [
    { title: 'الحلقات', label: 'صور حلقات التحفيظ' },
    { title: 'الأنشطة', label: 'برامج تربوية ومسابقات' },
    { title: 'الرحلات', label: 'فعاليات خارجية' },
    { title: 'التكريم', label: 'مناسبات التميز' }
  ];

  registration = {
    studentName: '',
    stage: '',
    phone: '',
    guardianName: '',
    transportation: '',
    program: ''
  };

  submitRegistration(): void {
    this.successMessage = 'تم استلام بيانات التسجيل تجريبيًا. اربط النموذج لاحقًا بقاعدة بيانات أو Google Form.';
  }

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }
}
