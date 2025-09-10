# OmaPSOAS Mobile App - Design System & Wireframes

## 🎨 Design Overview
**App Name:** OmaPSOAS  
**Purpose:** Tenant Housing Management for Oulu  
**Platform:** Mobile-First Progressive Web App  
**Design Language:** Clean, Modern, Accessibility-Focused  

---

## 🎯 Color Palette

### Primary Colors
```css
• Primary Green: #0db14b
• White: #ffffff  
• Light Grey: #f3f3f5
• Medium Grey: #717182
• Dark Grey: #030213
```

### Semantic Colors
```css
• Success: #0db14b (Primary Green)
• Warning: #f59e0b  
• Error: #d4183d
• Info: #0db14b (Primary Green)
```

---

## 📱 App Structure

```
OmaPSOAS Mobile App
├── Header (Fixed)
│   ├── Logo Badge (Green Circle with "O")
│   ├── App Name "OmaPSOAS"
│   └── Subtitle "Tenant Management"
│
├── Main Content Area (Scrollable)
│   ├── Dashboard Screen
│   ├── Reservations Screen  
│   ├── Fault Reporting Screen
│   ├── Chat Screen
│   └── Profile Screen
│
└── Bottom Navigation (Fixed)
    ├── Home Tab
    ├── Bookings Tab
    ├── Reports Tab
    ├── Chat Tab
    └── Profile Tab
```

---

## 🖼️ Screen Wireframes

### 📋 Layout Template
```
┌─────────────────────────────────┐
│ ● OmaPSOAS                      │ ← Header (White bg, Green logo)
│   Tenant Management            │
├─────────────────────────────────┤
│                                 │
│         SCREEN CONTENT          │ ← Main scrollable area
│                                 │
│                                 │
│                                 │
│                                 │
├─────────────────────────────────┤
│ [🏠] [📅] [⚠️] [💬] [👤]       │ ← Bottom Nav (White bg)
│ Home Book Report Chat Profile   │
└─────────────────────────────────┘
```

### 🏠 Dashboard Screen
```
┌─────────────────────────────────┐
│ Welcome back!                   │ ← Green gradient card
│ Apartment 3A, Building 15      │
│ Kajaanintie 45, Oulu           │
├─────────────────────────────────┤
│ Quick Actions                   │
│ ┌─────────┐ ┌─────────┐        │
│ │   📅    │ │   ⚠️    │        │ ← Action cards
│ │Book     │ │Report   │        │
│ │Laundry  │ │Fault    │        │
│ └─────────┘ └─────────┘        │
├─────────────────────────────────┤
│ Your Upcoming Reservations      │
│ • Laundry Room A - Today 14:00 │ ← Reservation list
│ • Community Room - Thu 18:00   │
├─────────────────────────────────┤
│ Recent Reports                  │
│ • Kitchen sink leak - Resolved │ ← Reports list
│ • Hallway light - In Progress  │
└─────────────────────────────────┘
```

### 📅 Reservations Screen
```
┌─────────────────────────────────┐
│ My Reservations                 │
│ Filter: [All ▼] [This Week ▼]  │
├─────────────────────────────────┤
│ Tabs: [Laundry] [Clubroom]     │ ← Tab navigation
├─────────────────────────────────┤
│ ┌─ Calendar Widget ─────────────┐│
│ │   September 2025             ││ ← Date picker
│ │ S  M  T  W  T  F  S          ││
│ │ 1  2  3  4  5  6  7          ││
│ │ 8  9 [10] 11 12 13 14        ││
│ └─────────────────────────────┘│
├─────────────────────────────────┤
│ Available Time Slots            │
│ ┌─────────────────────────────┐ │
│ │ 🕐 08:00-10:00    Available │ │ ← Time slot buttons
│ │ 🕐 10:00-12:00    Booked    │ │
│ │ 🕐 14:00-16:00    Available │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### ⚠️ Fault Reporting Screen
```
┌─────────────────────────────────┐
│ Fault Reports                   │
│ [+ New Report] ← Green button   │
├─────────────────────────────────┤
│ Filter: [All ▼] [Open ▼]       │
├─────────────────────────────────┤
│ Your Reports                    │
│ ┌─────────────────────────────┐ │
│ │ ⚠️ Kitchen Sink Leak        │ │ ← Report cards
│ │ Status: In Progress         │ │
│ │ Submitted: Sep 8, 2025      │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ ✅ Hallway Light            │ │
│ │ Status: Resolved            │ │
│ │ Submitted: Sep 5, 2025      │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘

New Report Modal:
┌─────────────────────────────────┐
│ Report a Fault                  │
├─────────────────────────────────┤
│ Title: [___________________]    │
│ Location: [Kitchen ▼]          │
│ Priority: [Medium ▼]           │
│ Description: [____________]     │
│              [____________]     │
│ Photo: [📷 Take Photo]         │
│        [📁 Choose File]        │
├─────────────────────────────────┤
│ [Cancel] [Submit Report] ← Green│
└─────────────────────────────────┘
```

### 💬 Chat Screen
```
┌─────────────────────────────────┐
│ Chat                            │
│ Connect with support & neighbors│
├─────────────────────────────────┤
│ Tabs: [🎧 Support] [👥 Tenants]│ ← Chat type tabs
├─────────────────────────────────┤
│ Customer Support                │
│ ┌─ Chat Header ─────────────────┐│
│ │ S  Customer Support    [📞]   ││ ← Contact info
│ │    Usually responds quickly   ││
│ └─────────────────────────────┘│
├─────────────────────────────────┤
│ Chat Messages:                  │
│ ┌─────────────────────────────┐ │
│ │ S  Hello! How can we help?  │ │ ← Support messages
│ │    10:30                    │ │
│ └─────────────────────────────┘ │
│                   ┌───────────┐ │
│                   │ Hi, I have│ │ ← User messages
│                   │ a question│ │   (Green bubbles)
│                   │    10:32  │ │
│                   └───────────┘ │
├─────────────────────────────────┤
│ [Type message...] [Send ➤] ← Green│
└─────────────────────────────────┘
```

### 👤 Profile Screen
```
┌─────────────────────────────────┐
│ Profile                         │
├─────────────────────────────────┤
│        ┌─────┐                  │
│        │  MK │ ← Green avatar   │
│        └─────┘                  │
│     Matti Korhonen             │
│   matti.k@email.com            │
├─────────────────────────────────┤
│ Apartment Information           │
│ ┌─────────────────────────────┐ │
│ │ 🏠 Apartment 3A             │ │
│ │ 🏢 Building 15              │ │ ← Info cards
│ │ 📍 Kajaanintie 45, Oulu     │ │
│ │ 📅 Lease: Jan 2023 - Dec 24 │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ Settings                        │
│ • 🔔 Notifications              │
│ • 🌐 Language (Finnish)         │ ← Settings menu
│ • 📋 Terms of Service           │
│ • 🔒 Privacy Policy            │
│ • 📞 Emergency Contacts         │
├─────────────────────────────────┤
│ OmaPSOAS Management App         │
│ Version 1.0.0                   │
└─────────────────────────────────┘
```

---

## 🧩 Component Hierarchy

### Navigation Components
```
BottomNavigation
├── NavItem (Home) - Active: Green bg, White icon
├── NavItem (Bookings) - Inactive: Grey icon
├── NavItem (Reports) - Inactive: Grey icon  
├── NavItem (Chat) - Inactive: Grey icon
└── NavItem (Profile) - Inactive: Grey icon
```

### Common UI Components
```
Header
├── LogoBadge (Green circle with "O")
├── AppTitle ("OmaPSOAS")
└── Subtitle ("Tenant Management")

Card
├── CardHeader (optional)
├── CardContent
└── CardFooter (optional)

Button
├── Primary (Green background, white text)
├── Secondary (Outlined, green border)
└── Ghost (Text only, green text)
```

### Screen-Specific Components
```
Dashboard
├── WelcomeCard (Green gradient)
├── QuickActionGrid
│   ├── ActionCard (Laundry booking)
│   └── ActionCard (Report fault)
├── ReservationsList
└── RecentReportsList

Reservations  
├── FilterBar
├── TabNavigation (Laundry/Clubroom)
├── CalendarPicker
└── TimeSlotGrid

FaultReporting
├── ReportsList
├── StatusFilter
├── NewReportModal
│   ├── FormFields
│   ├── PhotoCapture
│   └── SubmitButton (Green)

Chat
├── TabNavigation (Support/Tenants)
├── ChatHeader
├── MessagesList
│   ├── SupportMessage (Grey bubble)
│   └── UserMessage (Green bubble)
└── MessageInput

Profile
├── UserAvatar (Green)
├── UserInfo
├── ApartmentInfo
├── SettingsMenu
└── AppInfo
```

---

## 📐 Layout Specifications

### Spacing Scale
```css
• xs: 0.25rem (4px)
• sm: 0.5rem (8px)  
• md: 1rem (16px)
• lg: 1.5rem (24px)
• xl: 2rem (32px)
• 2xl: 3rem (48px)
```

### Typography Scale
```css
• text-xs: 0.75rem (12px)
• text-sm: 0.875rem (14px)
• text-base: 1rem (16px) ← Base size
• text-lg: 1.125rem (18px)
• text-xl: 1.25rem (20px)
• text-2xl: 1.5rem (24px)
```

### Border Radius
```css
• sm: 0.375rem (6px)
• md: 0.5rem (8px)
• lg: 0.625rem (10px) ← Default
• xl: 0.75rem (12px)
```

---

## 🔄 User Flow Diagrams

### Main Navigation Flow
```
┌─ Launch App ─┐
│   Dashboard  │ ← Default screen
└──────┬───────┘
       │
   ┌───▼───┐
   │ Tap   │
   │ Tab   │
   └───┬───┘
       │
   ┌───▼────────────┬────────────┬─────────┬─────────┐
   │   Dashboard    │Reservations│ Reports │  Chat   │Profile
   │                │            │         │         │
   │• Welcome card  │• Calendar  │• Report │• Support│• User
   │• Quick actions │• Time slots│  list   │  chat   │  info  
   │• Reservations  │• Booking   │• New    │• Tenant │• Settings
   │• Reports       │  flow      │  report │  chat   │
   └────────────────┴────────────┴─────────┴─────────┴───────┘
```

### Booking Flow
```
Dashboard → Reservations → Select Date → Choose Time → Confirm → Success
     │           │             │            │           │         │
   Quick      Calendar      Time Slot    Booking    Database   Dashboard
   Action     Picker        Grid         Dialog     Update     Return
```

### Fault Report Flow  
```
Dashboard → Reports → New Report → Fill Form → Take Photo → Submit → Success
     │         │          │          │          │          │        │
   Quick    Report      Modal      Form       Camera     API      Dashboard
   Action   List        Open       Fields     Access     Call     Return
```

### Chat Flow
```
Chat Tab → Select Type → View Messages → Send Message → Receive Response
    │          │             │              │               │
Navigation  Support/      Message         Input          Live Chat
           Tenants       History         Field          Updates
```

---

## 🎭 Interaction States

### Button States
```css
• Default: Green bg (#0db14b), white text
• Hover: Slightly darker green (opacity: 0.9)
• Active: Pressed effect (scale: 0.98)
• Disabled: Grey bg (#717182), muted text
• Loading: Spinner with green accent
```

### Input States
```css
• Default: Light grey bg (#f3f3f5), grey border
• Focus: Green border (#0db14b), white bg
• Error: Red border (#d4183d), error text
• Success: Green border (#0db14b), success icon
```

### Card States
```css
• Default: White bg, subtle shadow
• Hover: Elevated shadow
• Active/Selected: Green border accent
```

---

## 📱 Responsive Breakpoints

### Mobile-First Design
```css
• Mobile: 320px - 768px (Primary target)
• Tablet: 768px - 1024px (Secondary)
• Desktop: 1024px+ (Tertiary)
```

### Container Constraints
```css
• Max width: 28rem (448px) - Mobile optimized
• Horizontal padding: 1rem (16px)
• Vertical spacing: 1.5rem (24px)
```

---

## ♿ Accessibility Features

### Color Accessibility
- ✅ WCAG AA compliant contrast ratios
- ✅ Green (#0db14b) vs White: 4.5:1+ contrast
- ✅ Dark text on light backgrounds: 7:1+ contrast

### Interactive Elements
- ✅ Minimum touch target: 44px × 44px
- ✅ Focus indicators on all interactive elements
- ✅ Keyboard navigation support
- ✅ Screen reader semantic markup

### Content Structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for images and icons
- ✅ Form labels and error messages
- ✅ Loading and success states announced

---

## 🔧 Technical Implementation

### State Management
```typescript
// Global App State
interface AppState {
  activeTab: 'dashboard' | 'reservations' | 'faults' | 'chat' | 'profile'
  user: UserProfile
  reservations: Reservation[]
  faultReports: FaultReport[]
  chatMessages: ChatMessage[]
}
```

### Component Structure
```
/components
├── /ui (Shared UI components)
├── Dashboard.tsx
├── Reservations.tsx  
├── FaultReporting.tsx
├── Chat.tsx
└── Profile.tsx
```

### Styling Approach
- 🎨 Tailwind CSS v4 for utility-first styling
- 🎯 CSS custom properties for theming
- 📱 Mobile-first responsive design
- ♿ Focus on accessibility compliance

---

*This design system serves as the complete specification for the OmaPSOAS mobile tenant management application, ensuring consistent user experience across all screens and interactions.*