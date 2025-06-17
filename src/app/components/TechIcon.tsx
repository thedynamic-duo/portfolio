import React from 'react';
import Image from 'next/image';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const getIconPath = (techName: string) => {
    switch (techName.toLowerCase()) {
      case 'react':
        return '/icons/React.png';
      case 'react native':
        return '/icons/React.png';
      case 'flutter':
        return '/icons/Flutter.png';
      case 'dart':
        return '/icons/Dart.png';
      case 'node.js':
        return '/icons/Node.png';
      case 'python':
        return '/icons/python.svg';
      case 'firebase':
        return '/icons/firebase.png';
      case 'supabase':
        return '/icons/supabase.png';
      case 'gcp':
        return '/icons/gcp.png';
      case 'xano':
        return '/icons/xano.avif';
      case 'flutterflow':
        return '/icons/flutterflow.png';
      case 'power bi':
        return '/icons/powerbi.png';
      case 'ios':
        return '/icons/iOS.jpg';
      case 'android':
        return '/icons/android.webp';
      case 'app store':
        return '/icons/app_store.svg.png';
      case 'play store':
        return '/icons/play_store.png';
      default:
        return '/icons/default.png';
    }
  };

  const iconPath = getIconPath(name);
  const isSvg = iconPath.toLowerCase().endsWith('.svg');
  const isWebp = iconPath.toLowerCase().endsWith('.webp');
  const isAvif = iconPath.toLowerCase().endsWith('.avif');

  if (isSvg || isWebp || isAvif) {
    return (
      <div className={`relative ${className} flex items-center justify-center`}>
        <img
          src={iconPath}
          alt={`${name} icon`}
          className="w-full h-full object-contain"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <Image
        src={iconPath}
        alt={`${name} icon`}
        fill
        className="object-contain"
        sizes="(max-width: 24px) 100vw, 24px"
      />
    </div>
  );
};

export default TechIcon; 