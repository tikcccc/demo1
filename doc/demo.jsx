import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Mail, 
  FolderOpen, 
  HardHat, 
  ClipboardCheck, 
  Calculator, 
  ShoppingCart, 
  Users, 
  Truck, 
  Bell, 
  Search, 
  Menu, 
  UserCircle,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Download,
  Printer,
  MessageSquare,
  Link as LinkIcon,
  ChevronDown,
  Cloud,
  ExternalLink,
  ShieldCheck,
  PlayCircle,
  Check,
  XCircle,
  Building2,
  MapPin,
  File,
  Filter,
  Eye,
  Lock,
  ScanLine,
  Share2,
  PenTool,
  Smartphone,
  Siren,
  Construction,
  GraduationCap,
  PlusSquare,
  BarChart3,
  Wifi,
  Leaf,
  FileBadge,
  AlertOctagon,
  Image as ImageIcon,
  CalendarDays,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Briefcase,
  FileSignature,
  Package,
  Container,
  CreditCard,
  UserPlus,
  UserMinus,
  Calendar,
  Stethoscope,
  Award,
  Wrench,
  Gauge,
  History,
  ArrowRightLeft,
  FileSpreadsheet
} from 'lucide-react';

// --- Type Definitions ---
type ModuleType = 'dashboard' | 'email' | 'dms' | 'safety' | 'ims' | 'qs' | 'procurement' | 'hr' | 'plant';
type UserRole = 'Requester' | 'Reviewer' | 'Approver' | 'Admin';

// --- Mock Data ---
const MEMOS = [
  { id: 1, category: 'General', title: 'Annual Dinner Arrangement', date: '2025-10-26', urgent: false },
  { id: 2, category: 'Safety', title: 'New Safety Protocols for Mobile Crane (SAF-25-09)', date: '2025-10-25', urgent: true },
  { id: 3, category: 'IMS', title: 'ISO 9001 Audit Preparation', date: '2025-10-24', urgent: false },
];

const PROCUREMENT_NOTIFICATIONS = [
  { id: 1, text: 'Quotation Analysis > $100k Pending Approval', type: 'action' },
  { id: 2, text: 'Delivery Note Missing for PO-8821', type: 'pending' },
];

const SAFETY_NOTIFICATIONS = [
  { id: 1, text: 'Incident #402: Full Report Due', type: 'urgent' },
  { id: 2, text: 'Workers with Expired Green Cards: 3', type: 'warning' },
];

const PLANT_NOTIFICATIONS = [
  { id: 1, text: 'Summary Report Ready', type: 'info' },
];

const DMS_NOTIFICATIONS = [
  { id: 1, text: 'Monthly Update Required', type: 'warning' },
];

const DMS_FOLDERS = [
    { id: 'PR-A1', name: 'Tender Doc', type: 'project' },
    { id: 'PR-A2', name: 'Incoming/Outgoing Correspondence', type: 'project' },
    { id: 'PR-A13', name: 'Incident Report', type: 'safety' },
    { id: 'PR-A16', name: 'Compliant Record', type: 'safety' },
];

const DMS_FILES_MOCK = [
    { name: 'Incident_Report_20251025_SiteA.pdf', date: '2025-10-25', uploader: 'Kent Wong', size: '2.4 MB', folderId: 'PR-A13', security: 'encrypted', ocr: true, signed: true, external: false },
    { name: 'Investigation_Photos_Set1.zip', date: '2025-10-25', uploader: 'Kent Wong', size: '15 MB', folderId: 'PR-A13', security: 'standard', ocr: false, signed: false, external: true },
];

const WORKERS_DATA = [
    { id: 'W-0922', name: 'Chan Tai Man', trade: 'Rigger', hkid: '****123(4)', greenCard: 'Valid', greenCardExp: '2026-05-12', access: 'Granted', location: 'Zone B', status: 'Active' },
    { id: 'W-0925', name: 'Lee Siu Lung', trade: 'Welder', hkid: '****567(8)', greenCard: 'Expiring Soon', greenCardExp: '2025-11-01', access: 'Granted', location: 'Zone A', status: 'Active' },
    { id: 'W-0930', name: 'Cheung Wai', trade: 'General Lab.', hkid: '****999(0)', greenCard: 'Expired', greenCardExp: '2025-10-01', access: 'Denied', location: 'Gate 1', status: 'Blocked' },
];

const INCIDENTS_DATA = [
    { id: 'INC-2025-001', type: 'Near Miss', location: 'Site A - Zone 3', date: '2025-10-26', status: 'Prelim Submitted', stage: 1 },
    { id: 'INC-2025-002', type: 'Minor Injury', location: 'Site B - Workshop', date: '2025-10-20', status: 'Investigation', stage: 2 },
];

const SAFETY_FORMS = [
    { id: 'F-001', name: 'Daily Crane Inspection', updated: '2025-10-01', submissions: 142 },
    { id: 'F-002', name: 'Hot Work Permit', updated: '2025-09-15', submissions: 56 },
    { id: 'F-003', name: 'Site Induction Checklist', updated: '2025-01-20', submissions: 890 },
];

const IMS_COMPLAINTS = [
    { id: 'CMP-25-003', client: 'MTRC', subject: 'Noise level exceeded during night work', date: '2025-10-20', status: 'Investigation', car: 'CAR-003', signature: true },
    { id: 'CMP-25-004', client: 'ArchSD', subject: 'Dust control at gate 2', date: '2025-10-24', status: 'Open', car: 'Pending', signature: false },
    { id: 'CMP-25-001', client: 'Private Dev', subject: 'Site boundary cleanliness', date: '2025-09-15', status: 'Closed', car: 'N/A', signature: true },
];

const IMS_PERMITS = [
    { id: 'EP-402/2024', type: 'Environmental Permit', authority: 'EPD', expiry: '2026-01-15', status: 'Valid' },
    { id: 'GW-RN0122', type: 'Construction Noise Permit', authority: 'EPD', expiry: '2025-11-10', status: 'Expiring Soon' },
    { id: 'WP-8821', type: 'Water Discharge License', authority: 'EPD', expiry: '2025-10-30', status: 'Urgent' },
];

const IMS_INSPECTIONS = [
    { id: 'ENV-INS-042', date: '2025-10-25', location: 'Site A', inspector: 'Phoebe Ngan', issues: 2, rectified: 1, status: 'In Progress' },
    { id: 'ENV-INS-041', date: '2025-10-18', location: 'Site B', inspector: 'Keith Ngai', issues: 0, rectified: 0, status: 'Completed' },
];

const QS_SUBCON_PAYMENTS = [
    { id: 'PAY-SUB-082', subcon: 'ABC Piling Ltd', work: 'Bored Piles', amount: '$450,000', period: 'Oct 2025', status: 'Certifying', step: 3 },
    { id: 'PAY-SUB-085', subcon: 'Speedy Steel Fixing', work: 'Rebar Fixing', amount: '$120,000', period: 'Oct 2025', status: 'Under Review', step: 2 },
    { id: 'PAY-SUB-088', subcon: 'Grand Concrete', work: 'Concreting', amount: '$85,000', period: 'Oct 2025', status: 'New Request', step: 1 },
];

const QS_MAIN_CONTRACTS = [
    { id: 'MC-2401', project: 'J2401B1', employer: 'HK Housing Authority', type: 'Main Contract', value: '$1.2B', status: 'Active', voCount: 12 },
    { id: 'MC-2405', project: 'J2405C2', employer: 'Private Developer', type: 'Main Contract', value: '$450M', status: 'Active', voCount: 4 },
];

const PROC_ANNUAL_RATES = [
    { id: 'AR-25-001', category: 'Transportation (A1)', vendor: 'Speedy Logistics', item: 'Flatbed Trucks', rate: '$2,500/trip', status: 'Active', expiry: '2025-12-31' },
    { id: 'AR-25-002', category: 'Supply (A2)', vendor: 'Pure Water Co', item: 'Distilled Water', rate: '$45/bottle', status: 'Active', expiry: '2026-06-30' },
    { id: 'AR-25-003', category: 'Scrap (A3)', vendor: 'Recycle HK', item: 'Waste Steel', rate: 'Floating', status: 'Under Review', expiry: '2025-11-30' },
];

const PROC_PURCHASE_ORDERS = [
    { id: 'PO-25-8821', category: 'Steel (B1)', project: 'J2401B1', vendor: 'Steel Master Ltd', item: 'Reinforcement Bar T40', amount: '$1,200,000', requester: 'Alan Yeung', status: 'QS Handover', step: 5 },
    { id: 'PO-25-8822', category: 'General (B4)', project: 'J2401B1', vendor: 'SafeGear Inc', item: 'Safety Helmets (Type B)', amount: '$45,000', requester: 'Kent Wong', status: 'Delivery Pending', step: 4 },
    { id: 'PO-25-8825', category: 'Hardware (B4)', project: 'J2405C2', vendor: 'Tool Pro', item: 'Power Drills', amount: '$12,500', requester: 'WF Li', status: 'Approval Pending', step: 2 },
];

const HR_EMPLOYEES = [
    { id: 'EMP-1029', name: 'Kenneth Hong', type: 'Monthly', role: 'Digital Leader', location: 'Head Office', greenCard: 'Valid (2026)', status: 'Active' },
    { id: 'EMP-2044', name: 'Alan Yeung', type: 'Monthly', role: 'Project Manager', location: 'Site J2401B1', greenCard: 'Valid (2025)', status: 'Active' },
    { id: 'EMP-D-882', name: 'Chan Tai Man', type: 'Daily', role: 'Rigger', location: 'Site J2405C2', greenCard: 'Expiring Soon', status: 'Active' },
    { id: 'EMP-D-901', name: 'Lee Siu', type: 'Daily', role: 'General Lab.', location: 'Depot', greenCard: 'Valid', status: 'On Leave' },
];

const HR_LEAVE_REQUESTS = [
    { id: 'L-2025-081', emp: 'Alan Yeung', type: 'Annual Leave', dates: 'Nov 1 - Nov 3', days: 3, status: 'Pending Approval' },
    { id: 'L-2025-082', emp: 'WF Li', type: 'Sick Leave', dates: 'Oct 25', days: 1, status: 'Approved' },
];

const HR_TRAINING_RECORDS = [
    { id: 'TR-001', course: 'Confined Space Safety', emp: 'Chan Tai Man', date: '2025-09-10', expiry: '2028-09-10', status: 'Valid' },
    { id: 'TR-002', course: 'First Aid', emp: 'Lee Siu', date: '2022-10-01', expiry: '2025-10-01', status: 'Expiring' },
];

// --- Plant Module Mock Data (Modulus K) ---
const PLANT_FLEET = [
    { id: 'HBO-50', name: 'Crawler Crane 50T', brand: 'Kalicso', location: 'Site J2401B1', status: 'Operational', lastCheck: '2025-10-20' },
    { id: 'RCD-02', name: 'Reverse Circulation Drill', brand: 'Tysan Mech', location: 'Depot (Ping Che)', status: 'Repairing', lastCheck: '2025-10-15' },
    { id: 'GEN-09', name: 'Generator 200kVA', brand: 'Denyo', location: 'Site J2405C2', status: 'Operational', lastCheck: '2025-10-25' },
];

const PLANT_JOBS = [
    { id: 'JOB-49010', plantId: 'HBO-50', desc: 'Welding Repair & Screw Fix', requestDate: '2025-10-22', status: 'In Progress', cost: '$4,500' },
    { id: 'JOB-49012', plantId: 'RCD-02', desc: 'Hydraulic Pump Replacement', requestDate: '2025-10-18', status: 'Waiting Parts', cost: '$12,000' },
];

const PLANT_INSPECTIONS = [
    { id: 'INS-2025-881', plantId: 'HBO-50', type: 'Weekly', inspector: 'Mech. Foreman', result: 'Satisfactory', date: '2025-10-20' },
    { id: 'INS-2025-875', plantId: 'GEN-09', type: 'Monthly', inspector: 'Safety Officer', result: 'Rectification Req.', date: '2025-10-15' },
];

// --- Components ---

// 1. Sidebar Navigation
const Sidebar = ({ active, setActive, isOpen, toggleSidebar, currentRole, setRole }: { active: ModuleType, setActive: (m: ModuleType) => void, isOpen: boolean, toggleSidebar: () => void, currentRole: UserRole, setRole: (r: UserRole) => void }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard }, 
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'dms', label: 'DMS (Project & Safety)', icon: FolderOpen },
    { id: 'safety', label: 'Safety (Active/4S)', icon: HardHat }, 
    { id: 'ims', label: 'IMS (Quality & Env)', icon: ClipboardCheck },
    { id: 'qs', label: 'QS', icon: Calculator }, 
    { id: 'procurement', label: 'Procurement', icon: ShoppingCart }, 
    { id: 'hr', label: 'HR', icon: Users },
    { id: 'plant', label: 'Plant (Modulus K)', icon: Truck }, // Highlighted
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-100 border-r border-slate-300 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto flex flex-col`}>
      {/* Brand */}
      <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-300 shrink-0">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-lg">H</div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">e-Tysan</span>
        </div>
        <button onClick={toggleSidebar} className="lg:hidden text-slate-500">
          <Menu size={24} />
        </button>
      </div>

      {/* Project Selector */}
      <div className="p-4 border-b border-slate-200 bg-slate-50">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Current Project</label>
        <div className="relative">
            <button className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-left text-sm font-medium text-slate-700 flex justify-between items-center shadow-sm">
                <span className="truncate">J2401B1 (Kai Tak)</span>
                <ChevronDown size={14} className="text-slate-400" />
            </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1 overflow-y-auto flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id as ModuleType)}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-colors ${
              active === item.id 
                ? 'bg-red-50 text-red-700 border border-red-200 shadow-sm' 
                : 'text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent'
            }`}
          >
            <item.icon className={`mr-3 h-5 w-5 ${active === item.id ? 'text-red-600' : 'text-slate-400'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Role Switcher */}
      <div className="p-4 bg-slate-200 border-t border-slate-300">
        <label className="text-xs font-bold text-slate-600 uppercase mb-2 block flex items-center gap-1">
             <ShieldCheck size={12}/> Role Simulation
        </label>
        <div className="grid grid-cols-2 gap-2">
             {['Requester', 'Reviewer', 'Approver', 'Admin'].map((r) => (
                 <button 
                    key={r}
                    onClick={() => setRole(r as UserRole)}
                    className={`text-[10px] py-1 px-2 rounded border ${currentRole === r ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-300'}`}
                 >
                    {r}
                 </button>
             ))}
        </div>
      </div>
    </div>
  );
};

// 2. Top Header
const Header = ({ title, toggleSidebar, currentRole }: { title: string, toggleSidebar: () => void, currentRole: UserRole }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-300 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden text-slate-500 hover:text-slate-700">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
            <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        </div>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-slate-900">Kenneth Hong</p>
            <p className="text-xs text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-full inline-block">{currentRole}</p>
          </div>
          <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
            <UserCircle size={28} />
          </div>
        </div>
      </div>
    </header>
  );
};

// 3. Modules

// Modulus A: The Dashboard
const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
        <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden flex flex-col">
           <div className="bg-amber-50 px-6 py-3 border-b border-amber-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <FileText className="h-5 w-5 text-amber-600" />
                 Latest Company Information / Memo
              </h3>
              <span className="text-xs text-slate-500 italic">Data from Email & IMS</span>
           </div>
           <div className="p-4 space-y-2">
              {MEMOS.map((memo) => (
                  <div key={memo.id} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all cursor-pointer group">
                      <div className={`mt-1 px-2 py-0.5 text-[10px] font-bold uppercase rounded ${memo.urgent ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                          {memo.category}
                      </div>
                      <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800 group-hover:text-red-700">{memo.title}</p>
                          <p className="text-xs text-slate-400">{memo.date}</p>
                      </div>
                  </div>
              ))}
           </div>
        </div>

        <div>
            <h3 className="text-lg font-bold text-slate-700 mb-3 pl-1">Notification / Pending Tasks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm border-l-4 border-l-purple-500">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-slate-800 underline decoration-purple-500 decoration-2 underline-offset-4">Procurement</h4>
                        <ShoppingCart size={16} className="text-slate-400"/>
                    </div>
                    <ul className="space-y-2">
                        {PROCUREMENT_NOTIFICATIONS.map(n => (
                            <li key={n.id} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="text-purple-500 font-bold">&gt;&gt;&gt;</span> {n.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-4">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <LinkIcon size={16} /> Useful Link / App
              </h3>
              <ul className="space-y-2">
                  {['HKO - Weather', 'EPD', 'CIC - ZER', 'e-Form Portal'].map((link, idx) => (
                      <li key={idx}>
                          <a href="#" className="text-sm text-slate-700 hover:text-red-600 hover:underline flex items-center justify-between">
                              {link} <ExternalLink size={12} className="text-slate-400"/>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
    </div>
  );
};

// Modulus K: Plant Module
const PlantModule = ({ currentRole }: { currentRole: UserRole }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'inventory' | 'maintenance' | 'inspection' | 'logistics'>('overview');

    return (
        <div className="flex flex-col h-full gap-6">
            {/* Top Navigation for Plant */}
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg border border-slate-300 shadow-sm w-full">
                {[
                    { id: 'overview', label: 'Fleet Overview', icon: BarChart3 },
                    { id: 'inventory', label: 'Inventory & RCD', icon: Truck },
                    { id: 'maintenance', label: 'Maintenance (Job Sheets)', icon: Wrench },
                    { id: 'inspection', label: 'Inspection & Permits', icon: ShieldCheck },
                    { id: 'logistics', label: 'Transfer & Logistics', icon: ArrowRightLeft },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            activeTab === tab.id 
                            ? 'bg-slate-800 text-white shadow' 
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <tab.icon size={16} /> {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Total Fleet Size</p>
                                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Truck/> 142</h3>
                                <p className="text-[10px] text-slate-400 mt-1">Cranes, RCDs, Generators</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Operational / On Hire</p>
                                <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2"><CheckCircle2/> 115</h3>
                                <p className="text-[10px] text-green-600 mt-1">Utilization: 81%</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Under Maintenance</p>
                                <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2"><Wrench/> 8</h3>
                                <p className="text-[10px] text-red-600 mt-1">Open Job Sheets</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Idling / Off Hire</p>
                                <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-2"><Clock/> 19</h3>
                                <p className="text-[10px] text-slate-400 mt-1">Stored at Depot</p>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Wrench size={18} className="text-blue-500"/> Recent Repair Jobs</h3>
                                <div className="space-y-3">
                                    {PLANT_JOBS.map(job => (
                                        <div key={job.id} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0">
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">{job.plantId} - {job.desc}</p>
                                                <p className="text-xs text-slate-500">Req: {job.requestDate}</p>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded font-bold ${
                                                job.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                            }`}>{job.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><ShieldCheck size={18} className="text-green-500"/> Upcoming Inspections</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-red-50 p-2 rounded border border-red-100">
                                        <div>
                                            <p className="text-sm font-bold text-red-800">HBO-50: Annual Exam</p>
                                            <p className="text-xs text-red-600">Expires in 5 days (Form 2, 3)</p>
                                        </div>
                                        <button className="text-xs bg-white border border-red-200 text-red-600 px-2 py-1 rounded">Schedule</button>
                                    </div>
                                    <div className="flex justify-between items-center bg-green-50 p-2 rounded border border-green-100">
                                        <div>
                                            <p className="text-sm font-bold text-green-800">RCD-02: Weekly Check</p>
                                            <p className="text-xs text-green-600">Due Tomorrow</p>
                                        </div>
                                        <button className="text-xs bg-white border border-green-200 text-green-600 px-2 py-1 rounded">Assign</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'inventory' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-slate-800">Plant Inventory</h3>
                                <p className="text-xs text-slate-500">List of internal & external equipment</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-white border border-slate-300 text-slate-600 px-3 py-1.5 rounded text-xs">Filter by Site</button>
                                <button className="bg-slate-800 text-white px-3 py-1.5 rounded text-xs flex items-center gap-1"><FileSpreadsheet size={14}/> RCD Daily Report</button>
                            </div>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Plant No.</th>
                                    <th className="px-6 py-3">Description / Brand</th>
                                    <th className="px-6 py-3">Current Location</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Last Check</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {PLANT_FLEET.map((plant) => (
                                    <tr key={plant.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-mono font-bold text-slate-700">{plant.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-800">{plant.name}</div>
                                            <div className="text-xs text-slate-500">{plant.brand}</div>
                                        </td>
                                        <td className="px-6 py-4 flex items-center gap-1 text-slate-600">
                                            <MapPin size={14} className="text-blue-500"/> {plant.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                                plant.status === 'Operational' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>{plant.status}</span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{plant.lastCheck}</td>
                                        <td className="px-6 py-4">
                                            <button className="text-blue-600 hover:underline text-xs">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'maintenance' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">Repair & Maintenance Job Sheets</h3>
                                <button className="bg-red-600 text-white px-3 py-1.5 rounded text-xs hover:bg-red-700 flex items-center gap-1">
                                    <PlusSquare size={14}/> New Job Sheet
                                </button>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3">Job No</th>
                                        <th className="px-4 py-3">Plant ID</th>
                                        <th className="px-4 py-3">Description</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {PLANT_JOBS.map((job) => (
                                        <tr key={job.id} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-mono text-slate-600">{job.id}</td>
                                            <td className="px-4 py-3 font-bold text-slate-700">{job.plantId}</td>
                                            <td className="px-4 py-3 text-slate-600">{job.desc}</td>
                                            <td className="px-4 py-3">
                                                <span className={`text-xs px-2 py-1 rounded font-bold ${
                                                    job.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                                                }`}>{job.status}</span>
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">{job.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Mock Job Sheet Form View based on Image 2 */}
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                            <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Recent Job Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-slate-50 p-2 rounded"><span className="text-xs text-slate-400 block">Job No</span> SR-49010</div>
                                    <div className="bg-slate-50 p-2 rounded"><span className="text-xs text-slate-400 block">Plant</span> HBO-50</div>
                                </div>
                                <div className="bg-slate-50 p-2 rounded">
                                    <span className="text-xs text-slate-400 block">Job Description</span>
                                    <p className="font-medium text-slate-700">Repair welding on boom section. Replace hydraulic seal.</p>
                                </div>
                                <div className="bg-slate-50 p-2 rounded">
                                    <span className="text-xs text-slate-400 block">Parts Supplied</span>
                                    <ul className="list-disc list-inside text-xs text-slate-600 mt-1">
                                        <li>Seal Kit (Part #K-992)</li>
                                        <li>Welding Rods (5kg)</li>
                                    </ul>
                                </div>
                                <div className="mt-4 pt-2 border-t border-slate-100 flex justify-between items-center">
                                    <span className="text-xs text-slate-500">Approved By: Plant Manager</span>
                                    <button className="text-blue-600 text-xs hover:underline flex items-center gap-1"><Printer size={12}/> Print Job Sheet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'inspection' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-slate-800">Inspection Records & Permits</h3>
                                <p className="text-xs text-slate-500">Includes Sub-contractor Plant Permits</p>
                            </div>
                            <button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs hover:bg-green-700">
                                + Log Inspection
                            </button>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Inspection ID</th>
                                    <th className="px-6 py-3">Plant ID</th>
                                    <th className="px-6 py-3">Type</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Result</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {PLANT_INSPECTIONS.map((ins) => (
                                    <tr key={ins.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-mono text-slate-600">{ins.id}</td>
                                        <td className="px-6 py-4 font-bold text-slate-700">{ins.plantId}</td>
                                        <td className="px-6 py-4 text-slate-600">{ins.type}</td>
                                        <td className="px-6 py-4 text-slate-600">{ins.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded font-bold ${
                                                ins.result === 'Satisfactory' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>{ins.result}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-blue-600 hover:underline text-xs">View Cert</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'logistics' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-6">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <ArrowRightLeft className="text-blue-500"/> Transfer Note (Internal/External)
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 border border-dashed border-slate-300 rounded bg-slate-50 text-center">
                                    <p className="text-sm text-slate-600 mb-2">Initiate Plant Transfer Workflow</p>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Create Transfer Request</button>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Recent Transfers</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm p-2 border border-slate-100 rounded">
                                            <span>RCD-02: Site A &rarr; Depot</span>
                                            <span className="text-green-600 font-bold">Completed</span>
                                        </div>
                                        <div className="flex justify-between text-sm p-2 border border-slate-100 rounded">
                                            <span>GEN-09: Depot &rarr; Site B</span>
                                            <span className="text-amber-600 font-bold">Pending Transport</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-6">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <Package className="text-slate-500"/> Material Disposal
                            </h3>
                            <div className="space-y-3">
                                <p className="text-sm text-slate-600">Scrap Metal & Waste Disposal Records</p>
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">Log New Disposal</span>
                                    <PlusSquare size={16} className="text-green-500"/>
                                </button>
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">View Disposal History</span>
                                    <History size={16} className="text-slate-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// ... (Other modules like HRModule, ProcurementModule, QSModule, etc. remain unchanged) ...

const HRModule = ({ currentRole }: { currentRole: UserRole }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'leave' | 'recruit' | 'train'>('overview');

    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg border border-slate-300 shadow-sm w-full">
                {[
                    { id: 'overview', label: 'HR Dashboard', icon: BarChart3 },
                    { id: 'employees', label: 'Personnel (Info & Docs)', icon: Users },
                    { id: 'leave', label: 'Attendance & Leave', icon: Calendar },
                    { id: 'recruit', label: 'Recruitment', icon: UserPlus },
                    { id: 'train', label: 'Training & Safety', icon: GraduationCap },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            activeTab === tab.id 
                            ? 'bg-green-600 text-white shadow' 
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <tab.icon size={16} /> {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Total Headcount</p>
                                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Users/> 1,240</h3>
                                <div className="text-[10px] text-slate-400 mt-1 flex gap-2">
                                    <span className="text-blue-600">Monthly: 340</span>
                                    <span className="text-green-600">Daily: 900</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Attendance Today</p>
                                <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2"><Clock/> 96%</h3>
                                <p className="text-[10px] text-slate-400 mt-1">42 Staff on Leave</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Expiring Cards (30d)</p>
                                <h3 className="text-2xl font-bold text-amber-500 flex items-center gap-2"><AlertTriangle/> 12</h3>
                                <p className="text-[10px] text-amber-600 mt-1">Green Card / Visa</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Pending Approvals</p>
                                <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2"><FileSignature/> 5</h3>
                                <p className="text-[10px] text-slate-400 mt-1">Leave & Requisitions</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <AlertOctagon size={18} className="text-red-500"/> Urgent Compliance Alerts
                                </h3>
                                <div className="space-y-3">
                                    {HR_TRAINING_RECORDS.filter(t => t.status === 'Expiring').map(t => (
                                        <div key={t.id} className="flex justify-between items-center p-3 bg-red-50 border border-red-100 rounded">
                                            <div>
                                                <p className="text-sm font-bold text-red-800">{t.course} Expiring</p>
                                                <p className="text-xs text-red-600">{t.emp} • Exp: {t.expiry}</p>
                                            </div>
                                            <button className="text-xs bg-white border border-red-200 text-red-600 px-2 py-1 rounded">Renew</button>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center p-3 bg-amber-50 border border-amber-100 rounded">
                                        <div>
                                            <p className="text-sm font-bold text-amber-800">Visa Expiry Warning</p>
                                            <p className="text-xs text-amber-600">Employee ID: EMP-D-882</p>
                                        </div>
                                        <button className="text-xs bg-white border border-amber-200 text-amber-600 px-2 py-1 rounded">Check</button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <MessageSquare size={18} className="text-blue-500"/> HR Announcements / Memos
                                </h3>
                                <div className="space-y-3">
                                    <div className="p-3 bg-slate-50 rounded border border-slate-100">
                                        <div className="flex justify-between">
                                            <span className="text-xs font-bold text-slate-700">New Performance Appraisal System</span>
                                            <span className="text-[10px] text-slate-400">Oct 20, 2025</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1">Self-assessment phase begins next week.</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded border border-slate-100">
                                        <div className="flex justify-between">
                                            <span className="text-xs font-bold text-slate-700">Flu Vaccination Drive</span>
                                            <span className="text-[10px] text-slate-400">Oct 15, 2025</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1">On-site vaccination available at Site A & B.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'employees' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-green-50">
                            <div>
                                <h3 className="font-bold text-green-900">Employee Information Management</h3>
                                <p className="text-xs text-green-700">Profiles, Contracts, Qualifications</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-white border border-green-300 text-green-700 px-3 py-1.5 rounded text-xs hover:bg-green-50">
                                    Filter: All Sites
                                </button>
                                <button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs hover:bg-green-700 flex items-center gap-1">
                                    <PlusSquare size={14}/> Add Staff
                                </button>
                            </div>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Name / Role</th>
                                    <th className="px-6 py-3">Type / Site</th>
                                    <th className="px-6 py-3">Certificates</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {HR_EMPLOYEES.map((emp) => (
                                    <tr key={emp.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-mono text-slate-600">{emp.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-800">{emp.name}</div>
                                            <div className="text-xs text-slate-500">{emp.role}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-slate-800">{emp.type}</div>
                                            <div className="text-xs text-slate-500">{emp.location}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded border ${
                                                emp.greenCard.includes('Valid') ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                                            }`}>
                                                Green Card: {emp.greenCard}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs font-bold ${emp.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>
                                                {emp.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <button className="text-slate-400 hover:text-green-600"><FileText size={16}/></button>
                                            <button className="text-slate-400 hover:text-blue-600"><Briefcase size={16}/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'leave' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">Leave Applications</h3>
                                <button className="text-xs bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700">Apply Leave</button>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3">ID</th>
                                        <th className="px-4 py-3">Employee</th>
                                        <th className="px-4 py-3">Type</th>
                                        <th className="px-4 py-3">Dates</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {HR_LEAVE_REQUESTS.map((leave) => (
                                        <tr key={leave.id} className="hover:bg-slate-50">
                                            <td className="px-4 py-4 font-mono text-slate-600">{leave.id}</td>
                                            <td className="px-4 py-4 font-medium text-slate-800">{leave.emp}</td>
                                            <td className="px-4 py-4 text-slate-600">{leave.type}</td>
                                            <td className="px-4 py-4">
                                                <div className="text-slate-800">{leave.dates}</div>
                                                <div className="text-xs text-slate-500">{leave.days} Day(s)</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                                    leave.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                }`}>{leave.status}</span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <button className="text-blue-600 hover:underline text-xs">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                            <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Attendance Summary</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-600">Workforce Present</span>
                                    <span className="text-sm font-bold text-green-600">96%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <div className="bg-slate-50 p-2 rounded text-center">
                                        <p className="text-xs text-slate-500">Late In</p>
                                        <p className="text-lg font-bold text-orange-500">14</p>
                                    </div>
                                    <div className="bg-slate-50 p-2 rounded text-center">
                                        <p className="text-xs text-slate-500">Fieldwork</p>
                                        <p className="text-lg font-bold text-blue-500">8</p>
                                    </div>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <button className="w-full flex items-center justify-center gap-2 text-xs text-slate-600 bg-white border border-slate-300 py-2 rounded hover:bg-slate-50">
                                        <FileSignature size={14}/> View Timesheets (Payroll)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'recruit' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-6">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <UserPlus className="text-blue-500"/> Recruitment & Manpower
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">Manpower Requisition Form</span>
                                    <PlusSquare size={16} className="text-blue-500"/>
                                </button>
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">Onboarding Checklist</span>
                                    <ClipboardCheck size={16} className="text-green-500"/>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-6">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <UserMinus className="text-red-500"/> Termination & Offboarding
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">Cease Employment Form</span>
                                    <FileText size={16} className="text-red-500"/>
                                </button>
                                <button className="w-full text-left p-3 border border-slate-200 rounded hover:bg-slate-50 flex justify-between items-center">
                                    <span className="text-sm font-medium">Exit Interview Record</span>
                                    <MessageSquare size={16} className="text-slate-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'train' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-slate-800">Training Records & Safety Integration</h3>
                                <p className="text-xs text-slate-500">Integrated with Safety Dept (Work Injuries Database)</p>
                            </div>
                            <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700">
                                + Log Training / Injury
                            </button>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="border border-slate-200 rounded p-3">
                                 <h4 className="font-bold text-sm text-slate-700 mb-2 flex items-center gap-2"><Award size={16}/> Recent Training Completed</h4>
                                 <ul className="text-xs space-y-2 text-slate-600">
                                     <li>• Confined Space Safety - 12 Attendees (Oct 20)</li>
                                     <li>• Working at Height - 8 Attendees (Oct 15)</li>
                                 </ul>
                             </div>
                             <div className="border border-slate-200 rounded p-3 bg-red-50">
                                 <h4 className="font-bold text-sm text-red-800 mb-2 flex items-center gap-2"><Stethoscope size={16}/> Work Injury (EC Cases)</h4>
                                 <p className="text-xs text-red-600 mb-2">2 Active Cases requiring EC Form submission.</p>
                                 <button className="text-xs bg-white border border-red-200 text-red-600 px-2 py-1 rounded">View Case DB</button>
                             </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProcurementModule = ({ currentRole }: { currentRole: UserRole }) => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'annual' | 'po' | 'others'>('dashboard');
    const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

    // Procurement Workflow Visualizer
    const ProcurementWorkflow = ({ step }: { step: number }) => {
        const steps = [
            { id: 1, label: 'Req / Quote', desc: 'Site & PC' },
            { id: 2, label: 'Approval', desc: 'Director/Mgmt' },
            { id: 3, label: 'PO Issued', desc: 'Vendor Confirmed' },
            { id: 4, label: 'Delivery/Inv', desc: 'Site Receive' },
            { id: 5, label: 'QS Handover', desc: 'Payment Cert' }
        ];

        return (
            <div className="relative flex items-center justify-between mt-6 mb-8 px-2">
                <div className="absolute top-4 left-0 right-0 h-1 bg-slate-200 z-0 mx-6"></div>
                {steps.map((s) => (
                    <div key={s.id} className="relative z-10 flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-all ${
                            step >= s.id 
                            ? 'bg-purple-600 border-purple-600 text-white' 
                            : 'bg-white border-slate-300 text-slate-400'
                        }`}>
                            {step > s.id ? <Check size={18}/> : s.id}
                        </div>
                        <div className="mt-2 text-center w-20">
                            <p className={`text-[10px] font-bold uppercase ${step >= s.id ? 'text-purple-700' : 'text-slate-400'}`}>{s.label}</p>
                            <p className="text-[9px] text-slate-500 leading-tight">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg border border-slate-300 shadow-sm w-full">
                {[
                    { id: 'dashboard', label: 'Procurement Dashboard', icon: BarChart3 },
                    { id: 'annual', label: 'Annual Rate (A)', icon: CalendarDays },
                    { id: 'po', label: 'Purchase Orders (B)', icon: ShoppingCart },
                    { id: 'others', label: 'Others / Misc (C/D)', icon: Package },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id as any); setSelectedOrder(null); }}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            activeTab === tab.id 
                            ? 'bg-purple-600 text-white shadow' 
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <tab.icon size={16} /> {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1">
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                            <p className="text-xs text-slate-500 uppercase">Pending Approvals</p>
                            <h3 className="text-3xl font-bold text-amber-500">8</h3>
                            <p className="text-xs text-slate-400 mt-2">3 High Priority (&gt; $100k)</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                            <p className="text-xs text-slate-500 uppercase">Active Orders (This Month)</p>
                            <h3 className="text-3xl font-bold text-blue-600">42</h3>
                            <p className="text-xs text-slate-400 mt-2">Total Value: $2.4M</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                            <p className="text-xs text-slate-500 uppercase">Delivery Pending</p>
                            <h3 className="text-3xl font-bold text-purple-600">12</h3>
                            <p className="text-xs text-slate-400 mt-2">4 Overdue</p>
                        </div>
                        
                        <div className="md:col-span-3 bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                            <h3 className="font-bold text-slate-800 mb-4">Recent Requisition Activity</h3>
                            <div className="space-y-3">
                                {PROC_PURCHASE_ORDERS.map(po => (
                                    <div key={po.id} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0">
                                        <div>
                                            <p className="text-sm font-medium text-slate-800">{po.item}</p>
                                            <p className="text-xs text-slate-500">{po.id} • {po.vendor}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-xs px-2 py-1 rounded font-bold ${
                                                po.step === 5 ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                                            }`}>{po.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'annual' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-purple-50 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-purple-900">Annual Rate Contracts (A)</h3>
                                <p className="text-xs text-purple-600">Transportation, Supply, Scrap</p>
                            </div>
                            <button className="bg-purple-600 text-white px-3 py-1.5 rounded text-xs hover:bg-purple-700">
                                + New Rate Agreement
                            </button>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Contract ID</th>
                                    <th className="px-6 py-3">Category</th>
                                    <th className="px-6 py-3">Vendor</th>
                                    <th className="px-6 py-3">Item / Rate</th>
                                    <th className="px-6 py-3">Expiry</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {PROC_ANNUAL_RATES.map((ar) => (
                                    <tr key={ar.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-mono text-slate-600">{ar.id}</td>
                                        <td className="px-6 py-4 text-slate-600">{ar.category}</td>
                                        <td className="px-6 py-4 font-medium text-slate-800">{ar.vendor}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-slate-800">{ar.item}</div>
                                            <div className="text-xs text-slate-500">{ar.rate}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{ar.expiry}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                                ar.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                            }`}>{ar.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'po' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">Purchase Orders (B)</h3>
                                <div className="flex gap-2">
                                    <button className="text-xs border border-slate-300 px-2 py-1 rounded bg-white hover:bg-slate-50">Filter</button>
                                    <button className="text-xs bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700">+ New PO</button>
                                </div>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3">PO ID</th>
                                        <th className="px-4 py-3">Vendor / Item</th>
                                        <th className="px-4 py-3">Amount</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {PROC_PURCHASE_ORDERS.map((po, idx) => (
                                        <tr key={po.id} className={`hover:bg-slate-50 ${selectedOrder === idx ? 'bg-purple-50 border-l-4 border-l-purple-500' : ''}`}>
                                            <td className="px-4 py-4 font-mono text-slate-600">{po.id}</td>
                                            <td className="px-4 py-4">
                                                <div className="font-bold text-slate-800">{po.vendor}</div>
                                                <div className="text-xs text-slate-500">{po.item}</div>
                                            </td>
                                            <td className="px-4 py-4 font-bold text-slate-700">{po.amount}</td>
                                            <td className="px-4 py-4">
                                                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-bold">{po.status}</span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <button onClick={() => setSelectedOrder(idx)} className="text-purple-600 hover:underline text-xs font-bold">Track</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4 flex flex-col">
                            <h3 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">Order Lifecycle</h3>
                            {selectedOrder !== null ? (
                                <div>
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">{PROC_PURCHASE_ORDERS[selectedOrder].category}</span>
                                        <h2 className="text-lg font-bold text-slate-800 mt-1">{PROC_PURCHASE_ORDERS[selectedOrder].id}</h2>
                                        <p className="text-sm text-slate-500">{PROC_PURCHASE_ORDERS[selectedOrder].item}</p>
                                    </div>

                                    <ProcurementWorkflow step={PROC_PURCHASE_ORDERS[selectedOrder].step} />

                                    <div className="space-y-2 mt-4 bg-slate-50 p-3 rounded border border-slate-100">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-500">Requester:</span>
                                            <span className="font-bold text-slate-700">{PROC_PURCHASE_ORDERS[selectedOrder].requester}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-500">Vendor:</span>
                                            <span className="font-bold text-slate-700">{PROC_PURCHASE_ORDERS[selectedOrder].vendor}</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-500">Project:</span>
                                            <span className="font-bold text-slate-700">{PROC_PURCHASE_ORDERS[selectedOrder].project}</span>
                                        </div>
                                    </div>

                                    {PROC_PURCHASE_ORDERS[selectedOrder].step === 4 && (
                                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-center">
                                            <p className="text-xs text-amber-800 font-bold mb-2">Action Required: Verify Delivery</p>
                                            <button className="bg-amber-500 text-white w-full py-1.5 rounded text-xs hover:bg-amber-600">Scan Delivery Note</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-sm py-12">
                                    <Container size={32} className="mb-2 opacity-20"/>
                                    Select an order to view full tracking details.
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'others' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-8 text-center">
                        <Container size={48} className="mx-auto text-slate-200 mb-4"/>
                        <h3 className="text-lg font-bold text-slate-600">Miscellaneous & Contract Vehicles</h3>
                        <p className="text-sm text-slate-400">Module sections C & D are currently being populated.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const QSModule = ({ currentRole }: { currentRole: UserRole }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'revenue' | 'expense' | 'contracts'>('overview');
    const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

    const WorkflowVisual = ({ step }: { step: number }) => {
        const steps = [
            { id: 1, label: 'Request Order', desc: 'Site Team' },
            { id: 2, label: 'Quotation/Invoice', desc: 'Scan & Upload' },
            { id: 3, label: 'Confirm Order', desc: 'Verify Subcon' },
            { id: 4, label: 'Certification', desc: 'QS/Director' }
        ];

        return (
            <div className="relative flex items-center justify-between mt-4 mb-6 px-4">
                <div className="absolute top-4 left-0 right-0 h-1 bg-slate-200 z-0 mx-8"></div>
                
                {steps.map((s) => (
                    <div key={s.id} className="relative z-10 flex flex-col items-center">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                            step >= s.id 
                            ? 'bg-blue-600 border-blue-600 text-white' 
                            : 'bg-white border-slate-300 text-slate-400'
                        }`}>
                            {step > s.id ? <Check size={16}/> : s.id}
                        </div>
                        <div className="mt-2 text-center">
                            <p className={`text-[10px] font-bold uppercase ${step >= s.id ? 'text-blue-700' : 'text-slate-400'}`}>{s.label}</p>
                            <p className="text-[9px] text-slate-500">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-lg border border-slate-300 shadow-sm w-full">
                {[
                    { id: 'overview', label: 'Dashboard', icon: BarChart3 },
                    { id: 'revenue', label: 'Revenues (A)', icon: TrendingUp },
                    { id: 'expense', label: 'Expenses (B)', icon: TrendingDown },
                    { id: 'contracts', label: 'Contracts (D)', icon: Briefcase },
                    { id: 'review', label: 'Cost Review (C)', icon: FileSignature },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            activeTab === tab.id 
                            ? 'bg-yellow-400 text-slate-900 shadow' 
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        <tab.icon size={16} /> {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Total Revenue Certified</p>
                                <h3 className="text-2xl font-bold text-green-600 flex items-center gap-1"><DollarSign size={20}/> 14.2 M</h3>
                                <p className="text-[10px] text-green-500 flex items-center mt-1"><TrendingUp size={10}/> +5% vs last month</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Total Expenses Paid</p>
                                <h3 className="text-2xl font-bold text-red-600 flex items-center gap-1"><DollarSign size={20}/> 8.5 M</h3>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Pending Subcon Certs</p>
                                <h3 className="text-2xl font-bold text-amber-600">5</h3>
                                <p className="text-[10px] text-slate-400 mt-1">Action Required</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
                                <p className="text-xs text-slate-500 uppercase">Insurance Expiry</p>
                                <h3 className="text-2xl font-bold text-slate-700">62 Days</h3>
                                <p className="text-[10px] text-blue-500 mt-1">Project Insurance (QS-E1)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4">Cash Flow Forecast (Inflow vs Outflow)</h3>
                                <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-slate-100">
                                    {[60, 45, 70, 55, 80, 65].map((h, i) => (
                                        <div key={i} className="w-full flex flex-col justify-end gap-1">
                                            <div className="w-full bg-green-200 rounded-t" style={{height: `${h}%`}}></div>
                                            <div className="w-full bg-red-200 rounded-t" style={{height: `${h * 0.7}%`}}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-slate-400 mt-2 px-4">
                                    <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border border-slate-300 shadow-sm">
                                <div className="px-6 py-4 border-b border-slate-200 bg-yellow-50">
                                    <h3 className="font-bold text-yellow-800 flex items-center gap-2">
                                        <Bell size={18}/> QS Reminders & Alerts
                                    </h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded">
                                        <AlertTriangle size={16} className="text-red-600 mt-0.5"/>
                                        <div>
                                            <p className="text-sm font-bold text-red-800">Insurance Renewal Due</p>
                                            <p className="text-xs text-red-600">Project All Risk Policy expires in 2 weeks.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded">
                                        <FileText size={16} className="text-blue-600 mt-0.5"/>
                                        <div>
                                            <p className="text-sm font-bold text-blue-800">New VO Submitted</p>
                                            <p className="text-xs text-blue-600">Subcon A submitted VO #04 for review.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'expense' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-300 shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">Subcontractor Payment Certificates (QS-B8)</h3>
                                <button className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded border border-slate-300 flex items-center gap-1">
                                    <Filter size={12}/> Filter
                                </button>
                            </div>
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3">Cert ID</th>
                                        <th className="px-4 py-3">Subcontractor</th>
                                        <th className="px-4 py-3">Amount</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {QS_SUBCON_PAYMENTS.map((row, idx) => (
                                        <tr key={row.id} className={`hover:bg-slate-50 ${selectedPayment === idx ? 'bg-yellow-50' : ''}`}>
                                            <td className="px-4 py-3 font-mono text-slate-600">{row.id}</td>
                                            <td className="px-4 py-3">
                                                <div className="font-medium text-slate-800">{row.subcon}</div>
                                                <div className="text-xs text-slate-500">{row.work}</div>
                                            </td>
                                            <td className="px-4 py-3 font-bold text-slate-700">{row.amount}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    row.status === 'Certifying' ? 'bg-blue-100 text-blue-700' : 
                                                    'bg-slate-100 text-slate-600'
                                                }`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <button 
                                                    onClick={() => setSelectedPayment(idx)}
                                                    className="text-blue-600 hover:underline text-xs"
                                                >
                                                    View Workflow
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4 flex flex-col">
                            <h3 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">Approval Workflow</h3>
                            {selectedPayment !== null ? (
                                <div>
                                    <div className="mb-4">
                                        <p className="text-xs text-slate-500">Selected Certificate</p>
                                        <p className="text-lg font-bold text-blue-700">{QS_SUBCON_PAYMENTS[selectedPayment].id}</p>
                                        <p className="text-sm text-slate-700">{QS_SUBCON_PAYMENTS[selectedPayment].subcon}</p>
                                    </div>
                                    
                                    <WorkflowVisual step={QS_SUBCON_PAYMENTS[selectedPayment].step} />

                                    <div className="mt-6 space-y-2">
                                        <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-bold text-slate-700">OCR Status</span>
                                                <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={10}/> Verified</span>
                                            </div>
                                            <p className="text-slate-500">Invoice scanned and matched with PO.</p>
                                        </div>
                                        <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-bold text-slate-700">Auto-Filing</span>
                                                <span className="text-blue-600">Pending Cert</span>
                                            </div>
                                            <p className="text-slate-500">Will be filed to DMS/QS-B8 upon completion.</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 flex gap-2">
                                        <button className="flex-1 bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700">Certify Payment</button>
                                        <button className="flex-1 bg-white border border-red-200 text-red-600 py-2 rounded text-sm hover:bg-red-50">Reject</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-sm">
                                    <Briefcase size={32} className="mb-2 opacity-20"/>
                                    Select a payment request to view details.
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'contracts' && (
                    <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h3 className="font-bold text-slate-800">Main Contracts & Subcontracts (QS-D)</h3>
                            <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700">
                                + New Contract
                            </button>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3">Contract ID</th>
                                    <th className="px-6 py-3">Project / Type</th>
                                    <th className="px-6 py-3">Employer / Main Con</th>
                                    <th className="px-6 py-3">Value</th>
                                    <th className="px-6 py-3">VO Count</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {QS_MAIN_CONTRACTS.map((con) => (
                                    <tr key={con.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-mono text-slate-600">{con.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-800">{con.project}</div>
                                            <div className="text-xs text-blue-600 bg-blue-50 px-1 py-0.5 rounded inline-block mt-1">{con.type}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{con.employer}</td>
                                        <td className="px-6 py-4 font-bold text-slate-800">{con.value}</td>
                                        <td className="px-6 py-4 text-slate-600">{con.voCount}</td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs text-green-600 font-bold border border-green-200 px-2 py-1 rounded-full bg-green-50">
                                                {con.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

const IMSModule = () => {
    const [activeTab, setActiveTab] = useState<'quality' | 'environmental'>('quality');

    const QualityView = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500">Total Complaints (YTD)</p>
                        <h3 className="text-2xl font-bold text-slate-800">12</h3>
                    </div>
                    <MessageSquare className="text-blue-500" size={24}/>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500">Active CARs</p>
                        <h3 className="text-2xl font-bold text-orange-600">3</h3>
                    </div>
                    <AlertTriangle className="text-orange-500" size={24}/>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-300 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500">Pending E-Signatures</p>
                        <h3 className="text-2xl font-bold text-slate-800">1</h3>
                    </div>
                    <PenTool className="text-purple-500" size={24}/>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-300 shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-slate-800">Client Complaint Record</h3>
                        <p className="text-xs text-slate-500">Modulus F: Quality Management</p>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 flex items-center gap-2">
                         <PlusSquare size={16}/> New Complaint Record
                    </button>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-3">Complaint ID</th>
                            <th className="px-6 py-3">Client / Source</th>
                            <th className="px-6 py-3">Subject</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Corrective Action (CAR)</th>
                            <th className="px-6 py-3">E-Signature</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {IMS_COMPLAINTS.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-mono text-slate-600">{row.id}</td>
                                <td className="px-6 py-4 text-slate-800 font-medium">{row.client}</td>
                                <td className="px-6 py-4 text-slate-600">{row.subject}</td>
                                <td className="px-6 py-4">
                                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        row.status === 'Open' ? 'bg-red-100 text-red-700' :
                                        row.status === 'Investigation' ? 'bg-amber-100 text-amber-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {row.car !== 'N/A' && row.car !== 'Pending' ? (
                                        <button className="text-orange-600 hover:underline flex items-center gap-1 font-bold">
                                            <AlertTriangle size={12}/> {row.car}
                                        </button>
                                    ) : (
                                        <span className="text-slate-400">{row.car}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {row.signature ? (
                                        <div className="flex items-center gap-1 text-green-600 text-xs border border-green-200 bg-green-50 px-2 py-1 rounded w-fit">
                                            <PenTool size={10}/> Signed
                                        </div>
                                    ) : (
                                        <button className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                                            <PenTool size={10}/> Sign Now
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                    <button className="text-xs text-slate-500 hover:text-blue-600 flex items-center justify-center gap-1 w-full">
                        <BarChart3 size={14}/> Generate Monthly Summary for Top Management
                    </button>
                </div>
            </div>
        </div>
    );

    const EnvironmentalView = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white rounded-lg border border-slate-300 shadow-sm">
                    <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-green-50">
                        <div>
                            <h3 className="font-bold text-green-800 flex items-center gap-2"><FileBadge size={18}/> Permit & License Management</h3>
                            <p className="text-xs text-green-600">Auto-alerts for expiration dates</p>
                        </div>
                    </div>
                    <div className="p-4 space-y-3">
                        {IMS_PERMITS.map((p) => (
                            <div key={p.id} className="flex items-center justify-between p-3 border border-slate-100 rounded hover:bg-slate-50">
                                <div>
                                    <div className="font-bold text-slate-700">{p.type}</div>
                                    <div className="text-xs text-slate-500 font-mono">{p.id} • {p.authority}</div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-sm font-bold ${
                                        p.status === 'Urgent' ? 'text-red-600 animate-pulse' : 
                                        p.status === 'Expiring Soon' ? 'text-orange-600' : 'text-green-600'
                                    }`}>
                                        Exp: {p.expiry}
                                    </div>
                                    <div className="text-[10px] text-slate-400">{p.status === 'Urgent' ? 'RENEWAL REQUIRED' : 'Active'}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-4">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><GraduationCap size={18} className="text-blue-500"/> Env. Training</h3>
                    <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded text-sm">
                            <span className="block font-bold text-slate-700">Chemical Spillage Drill</span>
                            <span className="text-xs text-slate-500">Next Session: 2025-11-05</span>
                            <button className="mt-2 w-full text-xs bg-white border border-slate-300 py-1 rounded hover:bg-slate-100">View Attendees</button>
                        </div>
                         <div className="p-3 bg-slate-50 rounded text-sm">
                            <span className="block font-bold text-slate-700">Waste Management Talk</span>
                            <span className="text-xs text-slate-500">Completed: 2025-10-01</span>
                            <button className="mt-2 w-full text-xs bg-white border border-slate-300 py-1 rounded hover:bg-slate-100">Download Record</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-300 shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2"><ClipboardCheck className="text-green-600"/> Monthly Environmental Inspection</h3>
                     <button className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 flex items-center gap-2">
                         <PlusSquare size={16}/> Start New Inspection
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3">Inspection ID</th>
                                <th className="px-6 py-3">Date / Location</th>
                                <th className="px-6 py-3">Inspector</th>
                                <th className="px-6 py-3">Findings (Photos)</th>
                                <th className="px-6 py-3">Rectified (Photos)</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                         <tbody className="divide-y divide-slate-100">
                             {IMS_INSPECTIONS.map((ins) => (
                                 <tr key={ins.id} className="hover:bg-slate-50">
                                     <td className="px-6 py-4 font-mono text-slate-600">{ins.id}</td>
                                     <td className="px-6 py-4">
                                         <div className="font-medium text-slate-800">{ins.date}</div>
                                         <div className="text-xs text-slate-500">{ins.location}</div>
                                     </td>
                                     <td className="px-6 py-4 text-slate-600">{ins.inspector}</td>
                                     <td className="px-6 py-4">
                                         {ins.issues > 0 ? (
                                             <div className="flex gap-1">
                                                 {[...Array(ins.issues)].map((_, i) => (
                                                     <div key={i} className="w-8 h-8 bg-slate-200 rounded border border-slate-300 flex items-center justify-center text-slate-400 hover:bg-slate-300 cursor-pointer">
                                                         <ImageIcon size={14}/>
                                                     </div>
                                                 ))}
                                             </div>
                                         ) : <span className="text-slate-400 text-xs">No Issues</span>}
                                     </td>
                                      <td className="px-6 py-4">
                                         {ins.rectified > 0 ? (
                                             <div className="flex gap-1">
                                                 {[...Array(ins.rectified)].map((_, i) => (
                                                     <div key={i} className="w-8 h-8 bg-green-100 rounded border border-green-200 flex items-center justify-center text-green-600 hover:bg-green-200 cursor-pointer">
                                                         <ImageIcon size={14}/>
                                                     </div>
                                                 ))}
                                                 {ins.issues > ins.rectified && (
                                                     <button className="w-8 h-8 bg-white border border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500">
                                                         <Cloud size={14}/>
                                                     </button>
                                                 )}
                                             </div>
                                         ) : (ins.issues > 0 ? (
                                             <button className="text-xs text-blue-600 hover:underline flex items-center gap-1"><Cloud size={12}/> Upload Proof</button>
                                         ) : <span className="text-slate-400 text-xs">N/A</span>)}
                                     </td>
                                     <td className="px-6 py-4">
                                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            ins.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            {ins.status}
                                        </span>
                                     </td>
                                 </tr>
                             ))}
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full gap-6">
            <div className="flex space-x-1 bg-white p-1 rounded-lg border border-slate-300 shadow-sm w-fit">
                <button
                    onClick={() => setActiveTab('quality')}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        activeTab === 'quality' 
                        ? 'bg-slate-800 text-white shadow' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                    <CheckCircle2 size={16} /> IMS - Quality
                </button>
                <button
                    onClick={() => setActiveTab('environmental')}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        activeTab === 'environmental' 
                        ? 'bg-green-700 text-white shadow' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                    <Leaf size={16} /> IMS - Environmental
                </button>
            </div>

            <div className="flex-1">
                {activeTab === 'quality' ? <QualityView /> : <EnvironmentalView />}
            </div>
        </div>
    );
};

const WorkerRegistry = () => (
    <div className="space-y-4">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-300 shadow-sm">
             <div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Users className="text-blue-600"/> Unified Worker Registry
                </h3>
                <p className="text-xs text-slate-500">"Register Once, Work Anywhere" • Integrated with Gate Control</p>
             </div>
             <div className="flex gap-2">
                <button className="bg-slate-100 text-slate-600 px-3 py-2 rounded text-sm hover:bg-slate-200 flex items-center gap-2">
                     <ScanLine size={16}/> OCR Scan ID
                </button>
                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 flex items-center gap-2">
                     <PlusSquare size={16}/> New Worker
                </button>
             </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-300 shadow-sm overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                        <th className="px-4 py-3">Worker ID</th>
                        <th className="px-4 py-3">Name / Trade</th>
                        <th className="px-4 py-3">Documents (OCR Verified)</th>
                        <th className="px-4 py-3">Safety Score</th>
                        <th className="px-4 py-3">Access Status</th>
                        <th className="px-4 py-3">Location</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {WORKERS_DATA.map((worker, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-mono text-slate-600">{worker.id}</td>
                            <td className="px-4 py-3">
                                <div className="font-medium text-slate-800">{worker.name}</div>
                                <div className="text-xs text-slate-500">{worker.trade}</div>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs flex items-center gap-1">
                                        <CheckCircle2 size={10} className="text-green-500"/> HKID: {worker.hkid}
                                    </span>
                                    <span className={`text-xs flex items-center gap-1 ${worker.greenCard === 'Valid' ? 'text-slate-600' : 'text-red-600 font-bold'}`}>
                                        {worker.greenCard === 'Valid' ? <CheckCircle2 size={10} className="text-green-500"/> : <AlertTriangle size={10}/>} 
                                        Green Card: {worker.greenCardExp}
                                    </span>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                                <div className="w-24 bg-slate-200 rounded-full h-1.5 mt-1">
                                    <div className={`h-1.5 rounded-full ${worker.greenCard === 'Valid' ? 'bg-green-500 w-[95%]' : 'bg-red-500 w-[40%]'}`}></div>
                                </div>
                                <span className="text-[10px] text-slate-400">KPI: 98% Compliance</span>
                            </td>
                            <td className="px-4 py-3">
                                {worker.access === 'Granted' ? (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                        <Check size={12}/> Granted
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                                        <XCircle size={12}/> Denied
                                    </span>
                                )}
                            </td>
                            <td className="px-4 py-3 text-slate-500 flex items-center gap-1">
                                <MapPin size={12}/> {worker.location}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Main App Component ---
export default function App() {
  const [activeModule, setActiveModule] = useState<ModuleType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole>('Requester');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const getHeaderTitle = (module: ModuleType) => {
    switch (module) {
        case 'dashboard': return 'Home';
        case 'safety': return 'Safety Management (Modulus E)';
        case 'procurement': return 'Procurement (Modulus I)';
        case 'dms': return 'Project DMS';
        case 'ims': return 'IMS (Quality & Env)';
        case 'qs': return 'QS Management (Modulus H)';
        case 'hr': return 'Human Resources (Modulus J)';
        case 'plant': return 'Plant & Machinery (Modulus K)';
        default: return 'e-Portal';
    }
  };

  const renderContent = () => {
    switch (activeModule) {
        case 'dashboard': return <Dashboard />;
        case 'email': return <div className="p-8 bg-white border border-slate-300 rounded shadow text-center">External Webmail Integration Loading...</div>;
        case 'plant': return <PlantModule currentRole={currentRole} />; // New Module K
        case 'hr': return <HRModule currentRole={currentRole} />;
        case 'procurement': return <ProcurementModule currentRole={currentRole} />;
        case 'qs': return <QSModule currentRole={currentRole} />;
        case 'safety': return <SafetyModule />;
        case 'dms': return <DMSModule />; 
        case 'ims': return <IMSModule />; 
        default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Sidebar 
        active={activeModule} 
        setActive={(m) => { setActiveModule(m); setIsSidebarOpen(false); }} 
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        currentRole={currentRole}
        setRole={setCurrentRole}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title={getHeaderTitle(activeModule)} toggleSidebar={toggleSidebar} currentRole={currentRole} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#f8f9fa]">
            <div className="max-w-[1600px] mx-auto h-full">{renderContent()}</div>
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-400 pb-2">© 2026 Tysan Group. e-Tysan Digitalization System.</div>
        </main>
      </div>
    </div>
  );
}