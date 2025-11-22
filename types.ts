import React from 'react';

export interface NavItem {
    label: string;
    path: string;
}

export interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

export interface Project {
    title: string;
    category: string;
    image: string;
}

export interface AnalysisResult {
    slogan: string;
    keywords: string[];
    strategy: string;
    colorPalette: string[];
}

export enum LoadingState {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}