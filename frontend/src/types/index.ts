export type RouterType = "enterprise" | "home" | "wifi";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface BaseRouterItem {
  id: string;
  name: string;
  type: RouterType;
  createdAt: string;
  updatedAt: string;
  coordinates: Coordinates;
}

// Enterprise router
export interface EnterpriseRouter extends BaseRouterItem {
  type: "enterprise";
  portCount: number;
  supportedProtocols: string[];
  throughputGbps: number;
}

// Home router
export interface HomeRouter extends BaseRouterItem {
  type: "home";
  connectedDevices: number;
  parentalControlsEnabled: boolean;
  maxBandwidthMbps: number;
}

// WiFi router
export interface WifiRouter extends BaseRouterItem {
  type: "wifi";
  wifiChannels: number[];
  supportsDualBand: boolean;
}

// Unified type
export type RouterItem = EnterpriseRouter | HomeRouter | WifiRouter;

// Sort field names type
export type SortField = "name" | "updatedAt";

// Sort direction types
export type SortDirection = "asc" | "desc";
