import React, { useState, useMemo } from 'react';
import {
  Phone, Mail, CheckCircle2, Quote, Lightbulb, Play, AlertCircle, X, ChevronLeft, ChevronRight, Copy,
  Minus, Plus, Maximize, MousePointer2, Layers, Send, Lock, MessageCircle, MessageSquare, User, Target
} from 'lucide-react';
import {
  CampaignOutlined, DataUsageOutlined, VolunteerActivismOutlined,
  TrendingUpOutlined, MenuBookOutlined, HubOutlined,
  DevicesOutlined, PublicOutlined, SensorsOutlined,
  FavoriteBorderOutlined, SupportAgentOutlined,
  HealthAndSafetyOutlined, TrackChangesOutlined
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { GlassPlayButton } from './ui/GlassPlayButton';
import { NAVIGATION_CONTENT } from '../data/navigationContent';
import { 
  IconEmail, 
  IconPhone, 
  IconWhatsApp, 
  IconMessenger 
} from './ui/consultation/SharedConsultationUI';

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function StyleGuide() {
  const [activeTab, setActiveTab] = useState<'canvas' | 'colors' | 'typography' | 'components' | 'patterns' | 'icons'>('canvas');
  const [zoom, setZoom] = useState(0.4);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Refs for tracking and high-performance logic
  const panRef = React.useRef(pan);
  const isDraggingRef = React.useRef(false);
  const startPosRef = React.useRef({ x: 0, y: 0 });
  const lastMousePosRef = React.useRef({ x: 0, y: 0 });

  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Sync ref with state
  React.useEffect(() => {
    panRef.current = pan;
  }, [pan]);

  // Unified Zoom Engine
  const handleZoomStep = (delta: number, centerX: number, centerY: number) => {
    setZoom(prevZoom => {
      const nextZoom = Math.round(Math.min(Math.max(0.1, prevZoom + delta), 2) * 10) / 10;
      if (nextZoom !== prevZoom) {
        const scaleRatio = nextZoom / prevZoom;
        setPan(prevPan => ({
          x: centerX - (centerX - prevPan.x) * scaleRatio,
          y: centerY - (centerY - prevPan.y) * scaleRatio
        }));
      }
      return nextZoom;
    });
  };

  // Native macOS Gestures & Global Mouse Drag Hook
  React.useEffect(() => {
    if (activeTab !== 'canvas') return;
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      if (e.ctrlKey) {
        // Zoom-to-Cursor via wheel
        handleZoomStep(-e.deltaY * 0.01, mouseX, mouseY);
      } else {
        // Two-finger Pan logic
        setPan(prev => ({
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY
        }));
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0 || (e.target as HTMLElement).closest('button')) return;
      isDraggingRef.current = true;
      setIsDragging(true);
      startPosRef.current = { x: e.clientX - panRef.current.x, y: e.clientY - panRef.current.y };
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      // 1. Update last mouse position for buttons (relative to center)
      const rect = container.getBoundingClientRect();
      lastMousePosRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      };

      // 2. Dragging logic
      if (!isDraggingRef.current) return;
      setPan({
        x: e.clientX - startPosRef.current.x,
        y: e.clientY - startPosRef.current.y
      });
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
        container.style.cursor = 'grab';
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeTab]);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const pages = [
    { title: "Home Page (Platform)", path: "/", description: NAVIGATION_CONTENT.PLATFORM.body },
    { title: "Admissions Excellence", path: "/admissions", description: NAVIGATION_CONTENT.RECRUITMENT.body },
    { title: "Retention & Success", path: "/retention", description: NAVIGATION_CONTENT.SUCCESS.body },
    { title: "Strategic Engagement", path: "/engagement", description: NAVIGATION_CONTENT.MARKETING.body },
    { title: "Alumni & Development", path: "/alumni", description: NAVIGATION_CONTENT.ALUMNI.body }
  ];

  const getFrameUrl = (path: string) => {
    const base = (import.meta as any).env.BASE_URL;
    const cleanPath = path === '/' ? '' : path.startsWith('/') ? path.slice(1) : path;
    const separator = base.endsWith('/') ? '' : '/';
    return `${window.location.origin}${base}${separator}#/${cleanPath}?no-anim=true`;
  };

  const renderCanvas = () => (
    <div
      id="canvas-container"
      className="relative w-full h-[calc(100vh-160px)] bg-neutral-100 overflow-hidden cursor-grab"
    >
      {/* Figma-style Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />

      {/* Toolbar / Controls - Floating at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomStep(-0.1, lastMousePosRef.current.x, lastMousePosRef.current.y);
          }}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white cursor-pointer"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="px-4 text-[13px] font-bold text-white min-w-[60px] text-center border-x border-white/5">
          {Math.round(zoom * 100)}%
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomStep(0.1, lastMousePosRef.current.x, lastMousePosRef.current.y);
          }}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom(0.4); setPan({ x: 0, y: 0 }); }}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white ml-1 border-l border-white/5 cursor-pointer"
          title="Reset View"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Minimap - Light Sheet Mode */}
      <div
        id="minimap-nav"
        className="absolute bottom-10 right-10 z-[100] w-64 h-36 bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-crosshair select-none shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        onWheel={(e) => {
          e.preventDefault();
          const zoomStep = e.deltaY > 0 ? -0.1 : 0.1;
          handleZoomStep(zoomStep, lastMousePosRef.current.x, lastMousePosRef.current.y);
        }}
        onMouseDown={(e) => {
          const container = e.currentTarget;
          const handleMove = (moveEvent: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            // Use 16px effective padding from p-4
            const x = Math.min(Math.max(16, moveEvent.clientX - rect.left), rect.width - 16) - 16;
            const y = Math.min(Math.max(16, moveEvent.clientY - rect.top), rect.height - 16) - 16;

            // Map 0...224/112 range to virtual coordinates relative to center using 0.025 scale
            const targetX = (x - 112) / 0.025;
            const targetY = (y - 56) / 0.025;

            setPan({ x: -targetX * zoom, y: -targetY * zoom });
          };

          const handleUp = () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleUp);
          };

          window.addEventListener('mousemove', handleMove);
          window.addEventListener('mouseup', handleUp);
          handleMove(e.nativeEvent);
        }}
      >
        <div className="absolute inset-0 p-4">
          {/* Abstract Page Blocks - Optimized Scale (0.025) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-40 items-start scale-[0.025]">
            {pages.map((_, i) => (
              <div key={i} className="w-[1440px] h-[3400px] bg-neutral-200 rounded-3xl shadow-sm" />
            ))}
          </div>

          {/* Viewport Navigator - Synchronized with 0.025 Scale */}
          <motion.div
            className="absolute border-black/80 border-[1.5px] bg-black/2 rounded-sm pointer-events-none"
            animate={{
              x: 112 - (pan.x / zoom) * 0.025 - ((1440 / zoom) * 0.025) / 2,
              y: 56 - (pan.y / zoom) * 0.025 - ((1440 / zoom) * 0.025) / 2,
              width: (1440 / zoom) * 0.025,
              height: (1440 / zoom) * 0.025,
            }}
            transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.5 }}
          />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center pointer-events-none">
        <motion.div
          className="flex gap-40 items-start select-none"
          animate={{
            x: pan.x,
            y: pan.y,
            scale: zoom
          }}
          initial={{ scale: 0.1 }}
          transition={isDragging ? { duration: 0 } : { type: 'spring', damping: 30, stiffness: 250, mass: 0.8 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          {pages.map((page) => (
            <div key={page.path} className="flex flex-col gap-8 shrink-0">
              <div className="flex flex-col gap-2 ml-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-[14px]">
                    {page.title.charAt(0)}
                  </div>
                  <h3 className="text-[24px] font-bold text-black tracking-tight">{page.title}</h3>
                </div>
                <p className="text-[14px] text-neutral-500 max-w-[340px] leading-relaxed">{page.description}</p>
              </div>

              {/* Dynamic Full Page Frame */}
              <div
                className="w-[1440px] bg-white shadow-[0_60px_120px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-hidden relative group rounded-sm transition-[height] duration-700 ease-out"
                style={{ height: '3000px' }}
              >
                {/* Page Preview (Iframe) */}
                <iframe
                  src={getFrameUrl(page.path)}
                  className="w-full pointer-events-none"
                  style={{ border: 'none', height: '100%', minHeight: '3000px' }}
                  scrolling="no"
                  onLoad={(e) => {
                    const iframe = e.target as HTMLIFrameElement;
                    const measureAndApply = () => {
                      try {
                        const doc = iframe.contentWindow?.document;
                        if (doc) {
                          const contentHeight = Math.max(
                            doc.body.scrollHeight,
                            doc.documentElement.scrollHeight,
                            doc.body.offsetHeight
                          );
                          if (contentHeight > 1000) {
                            iframe.style.height = `${contentHeight}px`;
                            if (iframe.parentElement) {
                              iframe.parentElement.style.height = `${contentHeight}px`;
                            }
                          }
                        }
                      } catch (err) { }
                    };
                    setTimeout(measureAndApply, 100);
                    setTimeout(measureAndApply, 1500);
                  }}
                />

                {/* Passive Overlay for interaction safety */}
                <div className="absolute inset-0 bg-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  const renderColors = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Institutional Colour Palette</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Inventory of the "Greybox" palette. We utilise exclusively neutral tones to maintain a premium, minimalist institutional aesthetic. Click an icon to copy the HEX value.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Backgrounds */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Surface &amp; Backgrounds</h3>
          {[
            { name: 'bg-white', cls: 'bg-white border border-neutral-200', hex: '#FFFFFF' },
            { name: 'bg-neutral-50', cls: 'bg-neutral-50 border border-neutral-200', hex: '#FAFAFA' },
            { name: 'bg-neutral-100', cls: 'bg-neutral-100 border border-neutral-200', hex: '#F5F5F5' },
            { name: 'bg-neutral-200', cls: 'bg-neutral-200 border border-neutral-300', hex: '#E5E5E5' },
            { name: 'bg-neutral-800', cls: 'bg-neutral-800', hex: '#262626' },
            { name: 'bg-neutral-900', cls: 'bg-neutral-900', hex: '#171717' },
            { name: 'bg-[#333333]', cls: 'bg-[#333333]', hex: '#333333' },
            { name: 'bg-black', cls: 'bg-black', hex: '#000000' }
          ].map((color) => (
            <div key={color.name} className="flex items-center justify-between gap-4 p-2 hover:bg-neutral-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg shrink-0 shadow-sm ${color.cls}`}></div>
                <div className="flex flex-col">
                  <code className="text-[13px] text-black font-bold font-mono">{color.name}</code>
                  <span className="text-[11px] text-neutral-400 font-mono">{color.hex}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(color.hex)}
                className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all relative"
                title="Copy HEX"
              >
                {copiedHex === color.hex ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-black" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Borders */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Stroke &amp; Border System</h3>
          {[
            { name: 'border-transparent', cls: 'border border-transparent bg-neutral-50', hex: 'rgba(0,0,0,0)' },
            { name: 'border-[#F0F0F0]', cls: 'border-2 border-[#F0F0F0] bg-white', hex: '#F0F0F0' },
            { name: 'border-neutral-100', cls: 'border-2 border-neutral-100 bg-white', hex: '#F5F5F5' },
            { name: 'border-neutral-200', cls: 'border-2 border-neutral-200 bg-white', hex: '#E5E5E5' },
            { name: 'border-neutral-400', cls: 'border-2 border-neutral-400 bg-white', hex: '#A3A3A3' },
            { name: 'border-neutral-700', cls: 'border-2 border-neutral-700 bg-neutral-800', hex: '#404040' },
            { name: 'border-black', cls: 'border-2 border-black bg-white', hex: '#000000' }
          ].map((color) => (
            <div key={color.name} className="flex items-center justify-between gap-4 p-2 hover:bg-neutral-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg shrink-0 ${color.cls}`}></div>
                <div className="flex flex-col">
                  <code className="text-[13px] text-black font-bold font-mono">{color.name}</code>
                  <span className="text-[11px] text-neutral-400 font-mono">{color.hex}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(color.hex)}
                className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all relative"
                title="Copy HEX"
              >
                {copiedHex === color.hex ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-black" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Texts */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Content Hierarchy</h3>
          {[
            { name: 'text-black', hex: '#000000', label: 'text-black' },
            { name: 'text-neutral-800', hex: '#262626', label: 'text-neutral-800' },
            { name: 'text-neutral-700', hex: '#404040', label: 'text-neutral-700' },
            { name: 'text-neutral-600', hex: '#525252', label: 'text-neutral-600' },
            { name: 'text-neutral-500', hex: '#737373', label: 'text-neutral-500' },
            { name: 'text-neutral-400', hex: '#A3A3A3', label: 'text-neutral-400' },
            { name: 'text-neutral-300', hex: '#D4D4D4', label: 'text-neutral-300' },
            { name: 'text-white', hex: '#FFFFFF', label: 'text-white', dark: true },
          ].map((color) => (
            <div key={color.name} className="flex items-center justify-between gap-4 p-2 hover:bg-neutral-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg shrink-0 border border-neutral-100 ${color.dark ? 'bg-black' : 'bg-white'}`}>
                  <span className={`text-[14px] font-bold ${color.name}`}>Aa</span>
                </div>
                <div className="flex flex-col">
                  <code className="text-[13px] text-black font-bold font-mono">{color.name}</code>
                  <span className="text-[11px] text-neutral-400 font-mono">{color.hex}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(color.hex)}
                className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all relative"
                title="Copy HEX"
              >
                {copiedHex === color.hex ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-black" />
                )}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderTypography = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Institutional Typographic Scale</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          <strong><a href="https://fonts.google.com/specimen/Outfit" target="_blank" rel="noreferrer" className="hover:underline text-black decoration-black underline-offset-4 transition-all">Outfit Bold</a></strong> for institutional headings and <strong><a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noreferrer" className="hover:underline text-black decoration-black underline-offset-4 transition-all">Inter Regular</a></strong> for academic body copy.
          <br /><span className="text-[12px] mt-2 block opacity-70 italic text-black font-semibold">Requirement: British English (en-GB) and University/Programme/Admissions terminology.</span>
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {/* Headings Section */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold tracking-tight text-black">Institutional Headings</h2>
            <p className="text-[14px] text-neutral-400">
              Font: <a href="https://fonts.google.com/specimen/Outfit" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black transition-colors">Outfit Bold</a> / sans-serif
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {[
              { label: 'Heading - XXL', size: '64px (4rem)', lh: '72px', cls: 'text-[64px] leading-[72px] font-bold' },
              { label: 'Heading - XL', size: '56px (3.5rem)', lh: '64px', cls: 'text-[56px] leading-[64px] font-bold' },
              { label: 'Heading - LG', size: '48px (3rem)', lh: '56px', cls: 'text-[48px] leading-[56px] font-bold' },
              { label: 'Heading - MD', size: '40px (2.5rem)', lh: '44px', cls: 'text-[40px] leading-[44px] font-bold' },
              { label: 'Heading - SM', size: '32px (2rem)', lh: '36px', cls: 'text-[32px] leading-[36px] font-bold' },
              { label: 'Heading - XS', size: '24px (1.5rem)', lh: '28px', cls: 'text-[24px] leading-[28px] font-bold' },
              { label: 'Heading - XXS', size: '20px (1.25rem)', lh: '24px', cls: 'text-[20px] leading-[24px] font-bold' },
              { label: 'Heading - XXXS', size: '16px (1rem)', lh: '20px', cls: 'text-[16px] leading-[20px] font-bold' },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 items-start pb-6 border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 transition-colors px-2 -mx-2 rounded-xl">
                <div className={`${item.cls} text-black tracking-tight`}>{item.label}</div>
                <div className="flex flex-col gap-1.5 md:pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Size:</span>
                    <span className="text-[13px] text-black font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Line height:</span>
                    <span className="text-[13px] text-black font-medium">{item.lh}*</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Body Section */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold tracking-tight text-black">Academic Body Copy</h2>
            <p className="text-[14px] text-neutral-400">
              Font: <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black transition-colors">Inter Regular</a>
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {[
              { label: 'Body LG', size: '18px (1.125rem)', lh: '36px', cls: 'text-[18px] leading-[36px]' },
              { label: 'Body MD', size: '16px (1rem)', lh: '24px', cls: 'text-[16px] leading-[24px]' },
              { label: 'Body SM', size: '14px (0.875rem)', lh: '22px', cls: 'text-[14px] leading-[22px]' },
              { label: 'Body XS', size: '12px (0.75rem)', lh: '18px', cls: 'text-[12px] leading-[18px]' },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 items-start pb-6 border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 transition-colors px-2 -mx-2 rounded-xl">
                <div className={`${item.cls} text-neutral-700`}>{item.label}</div>
                <div className="flex flex-col gap-1.5 md:pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Size:</span>
                    <span className="text-[13px] text-black font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Line height:</span>
                    <span className="text-[13px] text-black font-medium">{item.lh}*</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const renderComponents = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Component Library</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Isolated UI elements. Atomised according to "Single Source of Truth" conventions. A collection of buttons, inputs, and functional units.
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">1. Actionable Elements</h2>
          <p className="text-[14px] text-neutral-500">Główne akcje, hover effects oraz specjalny wariant rozmytego szkła.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-8">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Podstawowe (Primary)</h3>

            <div className="flex flex-col items-start gap-5 w-full max-w-sm">
              <Button className="shadow-xl hover:shadow-2xl transition-all">
                Primary CTA (Default)
              </Button>
              <Button size="lg" fullWidth className="shadow-xl hover:shadow-2xl transition-all">
                Initiate Strategic Review
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-col items-start gap-4 pt-6 border-t border-neutral-200">
              <h3 className="text-[14px] text-black font-bold uppercase tracking-wider mb-2">Micro-Link & Icons</h3>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] text-neutral-700 hover:text-black transition-colors font-semibold cursor-pointer">
                Standard Link / Nav Link (:hover)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button aria-label="Phone Outline" onClick={(e) => e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                <Phone className="w-5 h-5" />
              </button>
              <button aria-label="Mail Outline" onClick={(e) => e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-8">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Floating Strategic Tooltip</h3>
            <p className="text-[13px] text-neutral-500 mb-2 leading-relaxed">Pływający opis podążający za kursorem, używany w nawigacji do progresywnego ujawniania celów strategicznych.</p>
            
            <div className="relative h-40 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-[14px] text-neutral-400 font-medium italic underline decoration-neutral-200 underline-offset-4">Hover over Nav Link</div>
              <div className="absolute top-10 left-10 z-[100] bg-neutral-800 rounded-[20px] p-6 shadow-2xl border border-neutral-700/50 flex flex-col min-w-[200px] max-w-[240px]">
                <p className="text-[12px] text-neutral-400 leading-[1.65]">
                  Strategic guidance on institutional admissions excellence and applicant journey optimisation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-6 col-span-1 md:col-span-2">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Expert Feedback Module</h3>
            <p className="text-[13px] text-neutral-500 mb-2 leading-relaxed">System zaufania wykorzystujący autorytet ekspercki (Institutional Strategist). Stosowany w kalkulatorach i formularzach konwersji.</p>
            
            <div className="flex flex-col gap-8">
              {/* Variant 1: Standalone */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm max-w-xl">
                <div className="w-12 h-12 rounded-full bg-neutral-100 shrink-0 flex items-center justify-center border border-white shadow-sm text-neutral-300">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-black uppercase tracking-wider">Expert Silhouette</span>
                      <span className="text-[12px] text-neutral-400 font-medium">Institutional Strategist</span>
                    </div>
                    <p className="text-[13px] italic text-neutral-600 leading-[1.6]">
                      &ldquo;Strategic alignment ensures that every institutional resource is optimised for admissions excellence and student success.&rdquo;
                    </p>
                </div>
              </div>

              {/* Variant 2: Integrated with Avatar Stack */}
              <div className="flex flex-col gap-5 max-w-xl">
                 <div className="flex items-center gap-4">
                   <div className="flex -space-x-2">
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F5F5F5] flex items-center justify-center font-bold text-[10px] text-neutral-600">AK</div>
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-[#D4D4D4] flex items-center justify-center font-bold text-[10px] text-neutral-600">MB</div>
                     <div className="w-10 h-10 rounded-full border-2 border-white bg-[#111111] flex items-center justify-center font-bold text-[9px] text-white z-10">+17</div>
                   </div>
                   <div className="flex flex-col">
                     <h4 className="text-[15px] font-bold text-black uppercase tracking-tight font-['Outfit']">Marcin Pieńkowski</h4>
                     <span className="text-[12px] text-neutral-400 font-medium tracking-tight">Institutional Strategist</span>
                   </div>
                 </div>
                 <div className="bg-white border border-neutral-100 p-5 rounded-2xl shadow-sm relative">
                   <p className="text-[13px] text-[#404040] leading-relaxed italic font-['Outfit']">
                     &quot;I won&apos;t sell you another IT system. I&apos;ll show you how to architect the institutional foundation your vision demands.&quot;
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">2. Brand Trust Signals</h2>
          <p className="text-[14px] text-neutral-500">Elements that reinforce institutional authority and compliance across the platform.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-6">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Institutional Trust Badges</h3>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {[
                { label: 'GDPR Compliant', detail: 'EU Data Protection' },
                { label: 'ISO 27001 Aligned', detail: 'Information Security' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-black/5">
                    <CheckCircle2 className="w-3 h-3 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-black font-bold leading-none">{badge.label}</span>
                    <span className="text-[10px] text-neutral-400 mt-1">{badge.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-6">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Avatar Stack (Trust Aggregator)</h3>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#F5F5F5] flex items-center justify-center font-bold text-[11px] text-neutral-600 shadow-sm animate-in slide-in-from-left-2 duration-300">AK</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#D4D4D4] flex items-center justify-center font-bold text-[11px] text-neutral-600 shadow-sm animate-in slide-in-from-left-2 duration-500 delay-75">MB</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-black flex items-center justify-center font-bold text-[10px] text-white z-10 shadow-md animate-in zoom-in duration-700 delay-150">+20</div>
              </div>
              <div className="flex flex-col">
                 <span className="text-[14px] font-bold text-black tracking-tight">Institutional Experts</span>
                 <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-bold">24/7 Strategic Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPatterns = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Strategic Design Patterns</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Complex organisms evolved from individual base components. Engineered for institutional conversion (CRO) and the fulfillment of the Strategic Mission.
        </p>
      </div>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">1. Institutional Solution Cards</h2>
          <p className="text-[14px] text-neutral-500">The primary modular pattern for presenting strategic capabilities. Includes high-performance hover scaling and integrated interactive triggers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-[24px] p-10 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-neutral-100 group cursor-pointer hover:scale-[1.02] transition-all">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-[18px] bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-all">
                <HubOutlined sx={{ fontSize: 32 }} />
              </div>
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300 group-hover:text-black" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] text-black font-bold tracking-tight">Institutional Innovation Hubs</h3>
              <p className="text-[14px] text-neutral-500 leading-[1.7]">
                Orchestrate high-value institutional partnerships and commercialise academic research through a unified CRM ecosystem.
              </p>
              <div className="flex items-center gap-3 text-[13px] font-bold text-neutral-400 group-hover:text-black transition-all mt-2">
                <div className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                Watch solution in action
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-neutral-50 p-8 border border-neutral-200 border-dashed rounded-[32px]">
              <h4 className="text-[13px] text-black font-bold uppercase tracking-wider mb-4">Pattern Specifications</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-[13px] text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  Grid: 3-column architectural partitioning
                </li>
                <li className="flex items-center gap-3 text-[13px] text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  Interaction: Active scale (1.02) + Shadow elevation
                </li>
                <li className="flex items-center gap-3 text-[13px] text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  Feedback: Progressive disclosure of checkmark state
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">2. Impact Calculator</h2>
          <p className="text-[14px] text-neutral-500">ROI visualization tool using interactive sliders and a metrics grid for strategic planning.</p>
        </div>

        <div className="bg-white rounded-[32px] p-10 border border-neutral-200 shadow-xl flex flex-col gap-10 max-w-3xl">
          <div className="flex justify-between items-center gap-4">
            <p className="text-[14px] text-neutral-600 font-medium">Annual Student Population</p>
            <span className="bg-black text-white text-[20px] px-5 py-1.5 rounded-full font-bold tracking-tight text-center min-w-[100px]">15,000</span>
          </div>
          {/* ROI Slider Track */}
          <div className="h-[4px] bg-neutral-100 rounded-full relative">
            <div className="absolute left-0 top-0 h-full w-[70%] bg-black rounded-full" />
            <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full shadow-lg border-2 border-white cursor-pointer ring-0 hover:ring-8 hover:ring-black/5 transition-all"></div>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-100">
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-bold text-black tracking-tight">+3,250</span>
              <span className="text-[11px] text-neutral-400 uppercase font-bold">Secured Retention</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-bold text-black tracking-tight">£4.2M</span>
              <span className="text-[11px] text-neutral-400 uppercase font-bold">Preserved Capital</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[24px] font-bold text-black tracking-tight">+15%</span>
              <span className="text-[11px] text-neutral-400 uppercase font-bold">NSS Uplift</span>
            </div>
          </div>
           <div className="mt-2 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
             <p className="text-[11px] text-neutral-400 leading-relaxed italic">
               Note: Global ROI slider thumb style is enforced via <code>theme.css</code> to ensure institutional consistency across all pillared calculators.
             </p>
           </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">3. Institutional Bridge Cards (Dark Theme)</h2>
          <p className="text-[14px] text-neutral-500">Navigation patterns for secondary conversion paths. Utilises high-contrast dark surfaces with sophisticated hover scaling.</p>
        </div>
        <div className="bg-neutral-800 rounded-[40px] p-16 flex items-center justify-center border border-neutral-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
            <div className="bg-transparent border border-neutral-700 rounded-[24px] p-8 flex flex-col gap-4 group hover:bg-[#333333] transition-all duration-300 hover:scale-[1.05] cursor-pointer">
              <div className="h-6 w-32 bg-white/20 rounded-full" />
              <div className="h-10 w-full bg-white/5 rounded-xl" />
              <div className="mt-auto h-4 w-24 bg-white/40 rounded-full" />
            </div>
            <div className="bg-transparent border border-neutral-700 rounded-[24px] p-8 flex flex-col gap-4 group hover:bg-[#333333] transition-all duration-300 hover:scale-[1.05] cursor-pointer">
              <div className="h-6 w-32 bg-white/20 rounded-full" />
              <div className="h-10 w-full bg-white/5 rounded-xl" />
              <div className="mt-auto h-4 w-24 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">4. Strategic Mission Centre (Principal Pattern)</h2>
          <p className="text-[14px] text-neutral-500">The primary institutional lead-generation architecture. A 12-column grid partitioning authority signals (5/12) and the direct conversion interface (7/12).</p>
        </div>
        <div className="border border-neutral-100 rounded-[32px] overflow-hidden bg-white shadow-xl scale-[0.7] origin-top -mb-72 p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto text-left">
            {/* Left Column: Authority signals */}
            <div className="lg:col-span-5 flex flex-col gap-10 opacity-60">
               <div className="flex flex-col gap-4">
                 <span className="text-[9px] text-neutral-400 uppercase tracking-[2px] font-bold">Strategic Mission Centre</span>
                 <h3 className="text-[28px] font-bold tracking-tight text-black leading-tight">Architecting the Institutional Foundation.</h3>
               </div>
               
               <div className="flex flex-col gap-8">
                 <div className="flex items-center gap-3">
                   <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full border border-white bg-neutral-100 flex items-center justify-center font-bold text-[8px] text-neutral-400">AK</div>
                     <div className="w-8 h-8 rounded-full border border-white bg-neutral-200 flex items-center justify-center font-bold text-[8px] text-neutral-400">MB</div>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[12px] font-bold text-black">20+ Architects</span>
                     <span className="text-[10px] text-neutral-400 uppercase font-bold">Expert Support</span>
                   </div>
                 </div>

                 <div className="border-t border-neutral-100 pt-6">
                    <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-2xl">
                      <p className="text-[12px] text-neutral-600 italic leading-relaxed">
                        &quot;I won&apos;t sell you another IT system. I&apos;ll show you how to architect the institutional foundation.&quot;
                      </p>
                    </div>
                 </div>
               </div>
            </div>
            {/* Right Column: Conversion interface */}
            <div className="lg:col-span-7 bg-white rounded-[24px] border border-zinc-200 p-8 flex flex-col gap-6 shadow-sm opacity-60 pointer-events-none">
              <div className="h-6 w-48 bg-neutral-200 rounded mb-4" />
              <div className="flex flex-col gap-4">
                <div className="h-10 w-full bg-neutral-50 rounded-xl" />
                <div className="h-10 w-full bg-neutral-50 rounded-xl" />
                <div className="h-10 w-full bg-neutral-50 rounded-xl" />
                <div className="h-12 w-full bg-black rounded-full mt-4 flex items-center justify-center gap-2">
                  <div className="h-2 w-24 bg-white/20 rounded" />
                  <Send className="w-3 h-3 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 mt-12 pb-24">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">5. Strategic Partner Insights (Case Study Pattern)</h2>
          <p className="text-[14px] text-neutral-500">Sophisticated modal pattern for deep institutional success stories. Features dynamic navigation and embedded conversion points.</p>
        </div>
        <div className="bg-neutral-50 rounded-[40px] p-12 border border-neutral-200 overflow-hidden relative min-h-[650px]">
           {/* High-Fidelity Modal Preview */}
           <div className="absolute inset-0 flex flex-col items-center justify-start p-12 pt-20">
              <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-2xl border border-neutral-200 h-full overflow-hidden flex flex-col scale-[0.85] origin-top">
                 {/* Modal Header */}
                 <div className="h-28 bg-black shrink-0 flex items-center px-12 relative overflow-hidden">
                    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">
                      S
                    </div>
                    <div className="relative z-10 w-full text-left">
                      <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-1 block">
                        Case Study Success Story
                      </span>
                      <h2 className="text-white text-2xl font-bold tracking-tight">
                        SWPS University
                      </h2>
                    </div>
                 </div>

                 {/* Modal Body (Scrollable Fragment) */}
                 <div className="flex-1 p-12 flex flex-col gap-10 overflow-y-auto text-left">
                    <header>
                      <h3 className="text-2xl font-bold text-black mb-6 leading-tight">
                        Transforming the Student Experience at Scale: The SWPS University Ecosystem
                      </h3>
                    </header>

                    <div className="grid md:grid-cols-2 gap-12">
                       {/* Section: Challenge */}
                       <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertCircle className="w-5 h-5 text-black" />
                            <h4 className="font-bold text-lg text-black">The Challenge</h4>
                          </div>
                          <p className="text-[14px] text-neutral-600 leading-relaxed">
                            Fragmentation of legacy administrative silos and paper-reliant critical paths.
                          </p>
                          <ul className="flex flex-col gap-3">
                             <li className="flex gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 shrink-0 mt-2"></div>
                                <span className="text-[13px] text-neutral-700">Digital expectations of 17,500+ learners.</span>
                             </li>
                          </ul>
                       </div>

                       {/* Section: Impact */}
                       <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-5 h-5 text-black" />
                            <h4 className="font-bold text-lg text-black">Institutional Impact</h4>
                          </div>
                          <div className="grid gap-3">
                             <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                                <span className="text-[18px] font-bold text-black block">+8.5% NSS Uplift</span>
                                <span className="text-[11px] text-neutral-400 uppercase font-bold">Projected Satisfaction</span>
                             </div>
                             <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                                <span className="text-[18px] font-bold text-black block">100% Digital</span>
                                <span className="text-[11px] text-neutral-400 uppercase font-bold">Paperless Operations</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Reference Block */}
                    <div className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-black relative overflow-hidden mt-4">
                      <Quote className="absolute -top-2 -right-2 w-20 h-20 text-black/5" />
                      <p className="text-[15px] italic text-neutral-800 leading-relaxed mb-4 relative z-10">
                        "The transition from reactive administration to proactive student care has fundamentally changed our campus culture."
                      </p>
                      <cite className="not-italic font-bold text-black text-[13px]">
                        SWPS University Representative
                      </cite>
                    </div>
                 </div>

                 {/* Modal Footer */}
                 <div className="h-20 border-t border-neutral-100 bg-white flex items-center justify-between px-12">
                    <div className="text-[12px] text-neutral-400 font-medium">Think Beyond © 2026</div>
                    <div className="flex items-center gap-4">
                       <span className="font-bold text-black text-sm">1 / 3</span>
                       <div className="flex gap-2">
                          <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-300">
                            <ChevronLeft className="w-4 h-4" />
                          </div>
                          <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-black">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="absolute top-10 left-10 z-20">
              <div className="bg-black text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xl">
                 Modal Content Architecture
              </div>
           </div>
        </div>
      </section>
    </div>
  );

  const renderIcons = () => {
    const toKebabCase = (str: string) =>
      str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

    const toSnakeCase = (str: string) =>
      str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();

    const iconGrid = (
      title: string,
      icons: { name: string, Icon: any, source: string }[],
      provider: 'lucide' | 'material'
    ) => (
      <div className="flex flex-col gap-6">
        <h3 className="text-[14px] text-neutral-400 font-bold uppercase tracking-wider">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {icons.map((item, idx) => {
            const url = provider === 'lucide'
              ? `https://lucide.dev/icons/${toKebabCase(item.name)}`
              : `https://fonts.google.com/icons?selected=Material+Symbols+Outlined:${toSnakeCase(item.name)}`;

            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-neutral-50 rounded-2xl p-6 border border-neutral-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer no-underline"
              >
                <div className="text-neutral-400 group-hover:text-black transition-colors duration-300">
                  <item.Icon size={32} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[11px] font-bold text-black break-all text-center">{item.name}</span>
                  <span className="text-[9px] text-neutral-400 uppercase font-mono">{item.source}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-black">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );

    return (
      <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
        <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
          <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">In-System Iconography</h1>
          <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            A curated library of symbols used across the platform. Click on an icon to visit the source documentation (Lucide/Material).
          </p>
        </div>

        <section className="flex flex-col gap-16">
          {iconGrid("Logistics & Actions (Lucide)", [
            { name: "Phone", Icon: Phone, source: "Interaction" },
            { name: "Mail", Icon: Mail, source: "Contact" },
            { name: "CheckCircle2", Icon: CheckCircle2, source: "Success" },
            { name: "Play", Icon: Play, source: "Video" },
            { name: "Send", Icon: Send, source: "Form Action" },
            { name: "Lock", Icon: Lock, source: "Security" },
            { name: "MessageCircle", Icon: MessageCircle, source: "WhatsApp" },
            { name: "MessageSquare", Icon: MessageSquare, source: "Messenger" },
            { name: "User", Icon: User, source: "Expertise" }
          ], "lucide")}

          <div className="flex flex-col gap-6">
            <h3 className="text-[14px] text-neutral-400 font-bold uppercase tracking-wider">Custom Lead-Gen Symbols (SVG)</h3>
            <p className="text-[12px] text-neutral-500 mb-4 italic max-w-xl">Bespoke SVG iconography for the direct support channels. te symbole zostały zaprojektowane specjalnie dla instytucjonalnych kanałów wsparcia bezpośredniego.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "IconEmail", Icon: IconEmail, source: "Personal Email" },
                { name: "IconPhone", Icon: IconPhone, source: "Direct Line" },
                { name: "IconWhatsApp", Icon: IconWhatsApp, source: "Strategic Chat" },
                { name: "IconMessenger", Icon: IconMessenger, source: "Instant Support" }
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:scale-[1.05] transition-all duration-300">
                  <div className="text-black">
                    <item.Icon className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[13px] font-bold text-black">{item.name}</span>
                    <span className="text-[10px] text-neutral-400 uppercase font-mono">{item.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {iconGrid("Strategic Domain Symbols (Material)", [
            { name: "CampaignOutlined", Icon: CampaignOutlined, source: "Engagement" },
            { name: "DataUsageOutlined", Icon: DataUsageOutlined, source: "Intelligence" },
            { name: "HubOutlined", Icon: HubOutlined, source: "Ecosystem" },
            { name: "TrendingUpOutlined", Icon: TrendingUpOutlined, source: "Growth" },
            { name: "MenuBookOutlined", Icon: MenuBookOutlined, source: "Academic" },
            { name: "HealthAndSafetyOutlined", Icon: HealthAndSafetyOutlined, source: "Retention" }
          ], "material")}
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <div className="flex flex-col flex-1 relative w-full mx-auto">
        <div className="sticky top-0 z-[90] w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 px-3 lg:px-6 py-4 flex items-center justify-between gap-6 overflow-x-auto shrink-0 shadow-sm">
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[18px] md:text-xl font-bold text-black tracking-[-1px]">Interactive Canvas</span>
          </div>

          <nav className="flex items-center gap-2 shrink-0">
            {(['canvas', 'colors', 'typography', 'components', 'patterns', 'icons'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap",
                  activeTab === tab ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <main className={cn(
          "flex-1 w-full overflow-y-visible transition-all duration-300",
          activeTab === 'canvas' ? "p-0" : "max-w-7xl mx-auto px-3 py-12 md:py-16 lg:px-6"
        )}>
          {activeTab === 'canvas' && renderCanvas()}
          {activeTab === 'colors' && renderColors()}
          {activeTab === 'typography' && renderTypography()}
          {activeTab === 'components' && renderComponents()}
          {activeTab === 'patterns' && renderPatterns()}
          {activeTab === 'icons' && renderIcons()}
        </main>
      </div>

      <footer className="w-full border-t border-neutral-200 bg-neutral-50 px-3 lg:px-6 py-8 mt-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-neutral-500 font-medium shrink-0">
        <div>&copy; 2026 Geemu Studio</div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span>Design System Canvas</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:block"></span>
          <span>v1.0.0</span>
        </div>
      </footer>
    </div>
  );
}
