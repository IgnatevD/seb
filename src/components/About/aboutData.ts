import Pronchakov from '../../img/deanate/Прончаков.avif';
import Danova from '../../img/deanate/Данова.avif';
import Klimenko from '../../img/deanate/Клименко.avif';
import Petryk from '../../img/deanate/Петрик.avif';
import Liba from '../../img/deanate/Лыба.avif';
import Kuznetsova from '../../img/deanate/Кузнецова.avif';
import Volobuyeva from '../../img/deanate/Волобуєва.avif';
import Kovalchuk from '../../img/deanate/Ковальчук.avif';
import Gatylo from '../../img/deanate/Гатило.avif';
import Turkin from '../../img/deanate/Туркін.avif';

export interface StaffMember {
  name: string;
  role: string;
  photoUrl?: string;
}

export const facultyInfo = {
  sectionTitle: 'Наша команда завжди допоможе здобути кращу освіту',
  deanateTitle: 'Деканат',
  departmentsTitle: 'Завідувачі кафедр',

  description: {
    title: 'Наш факультет Національного аерокосмічного університету "ХАІ"\'',
    intro: {
      text: 'запрошує абітурієнтів на сучасні освітні програми в галузі ІТ та бізнесу.',
    },
    directionsTitle: '🔍 Напрями підготовки:',
    directions: [
      'Інженерія програмного забезпечення',
      'Економіка підприємства',
      'Облік і оподаткування',
      'Менеджмент',
      'Маркетинг',
      'Публічне управління та адміністрування',
      'Міжнародна економіка',
      'Фінанси, банківська справа та страхування',
    ],
    benefitsTitle: '💼 Переваги навчання:',
    benefits: [
      'Тісна співпраця з IT-компаніями та бізнесом',
      'Практика, стажування, участь у проєктах',
      'Сучасні лабораторії, інноваційні технології',
      'Можливість стажування за кордоном',
      'Активне студентське життя: наука, спорт, культура',
    ],
    conclusion:
      'Навчання на факультеті — це шанс отримати якісну освіту, практичні навички та побудувати успішну кар’єру в сфері ІТ та бізнесу.',
  },
  deanate: [
    { name: 'Прончаков Юрій Леонідович', role: 'Декан факультету', photoUrl: Pronchakov },
    { name: 'Данова Марія Олександрівна', role: 'Перший заступник декана', photoUrl: Danova },
    { name: 'Клименко Тетяна Анатоліївна', role: 'Заступник декана по 1-му та 2-му курсам ОКР «Бакалавр», «Молодший бакалавр»', photoUrl: Klimenko },
    { name: 'Петрик Валерія Леонідівна', role: 'Заступник декана по 3-4 курсу ОКР «Бакалавр»', photoUrl: Petryk },
    { name: 'Либа Василь Олексійович', role: 'Заступник декана з довузівської та виховної роботи', photoUrl: Liba },
    { name: 'Кузнецова Юлія Олександрівна', role: 'Заступник декана з наукової роботи', photoUrl: Kuznetsova },
    { name: 'Волобуєва Ліна Олексіївна', role: 'Заступник декана з наукової роботи', photoUrl: Volobuyeva },
  ] as StaffMember[],
  departments: [
    {
      name: 'Вероніка Геннадіївна',
      role: 'Зав. каф. економіки та публічного управління (601)',
      photoUrl: Kovalchuk,
    },
    {
      name: 'Валентина Петрівна',
      role: 'Зав. каф. менеджменту та бізнес-адміністрування (602)',
      photoUrl: Gatylo,
    },
    {
      name: 'Ігор Борисович',
      role: 'Зав. каф. інженерії програмного забезпечення (603)',
      photoUrl: Turkin,
    },
  ] as StaffMember[],
};
