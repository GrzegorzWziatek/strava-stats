export enum ActivityType {
  AlpineSki = 'AlpineSki',
  BackcountrySki = 'BackcountrySki',
  Canoeing = 'Canoeing',
  Crossfit = 'Crossfit',
  EBikeRide = 'EBikeRide',
  Elliptical = 'Elliptical',
  Golf = 'Golf',
  Handcycle = 'Handcycle',
  Hike = 'Hike',
  IceSkate = 'IceSkate',
  InlineSkate = 'InlineSkate',
  Kayaking = 'Kayaking',
  Kitesurf = 'Kitesurf',
  NordicSki = 'NordicSki',
  Ride = 'Ride',
  RockClimbing = 'RockClimbing',
  RollerSki = 'RollerSki',
  Rowing = 'Rowing',
  Run = 'Run',
  Sail = 'Sail',
  Skateboard = 'Skateboard',
  Snowboard = 'Snowboard',
  Snowshoe = 'Snowshoe',
  Soccer = 'Soccer',
  StairStepper = 'StairStepper',
  StandUpPaddling = 'StandUpPaddling',
  Surfing = 'Surfing',
  Swim = 'Swim',
  Velomobile = 'Velomobile',
  VirtualRide = 'VirtualRide',
  VirtualRun = 'VirtualRun',
  Walk = 'Walk',
  WeightTraining = 'WeightTraining',
  Wheelchair = 'Wheelchair',
  Windsurf = 'Windsurf',
  Workout = 'Workout',
  Yoga = 'Yoga',
}

export enum ResourceState {
  Meta = 1,
  Summary = 2,
  Detail = 3,
}

export enum StreamKeys {
  Time = 'time',
  Distance = 'distance',
  LatLng = 'latlng',
  Altitude = 'altitude',
  VelocitySmooth = 'velocity_smooth',
  Heartrate = 'heartrate',
  Cadence = 'cadence',
  Watts = 'watts',
  Temp = 'temp',
  Moving = 'moving',
  GradeSmooth = 'grade_smooth',
}

export enum UnitSystem {
  Feet = 'feet',
  Meters = 'meters',
}

export interface SimplifiedActivity {
  date?: Date; // custom
  dateStr?: string; // custom
  distanceKM: number; // custom
  avgSpeedKM: number; // custom
  name: string;
  distance: number;
  type: ActivityType;
  id: number;
  url: string;
}

export interface SummaryActivity {
  date?: Date; // custom
  distanceKM: number; // custom
  avgSpeedKM: number; // custom
  resource_state: ResourceState;
  athlete: {
    id: 45175076;
    resource_state: ResourceState;
  };
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: ActivityType;
  workout_type: number;
  id: number;
  external_id: string;
  upload_id: number;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  start_latlng: number[];
  end_latlng: number[];
  location_city: string;
  location_state: string;
  location_country: string;
  start_latitude: number;
  start_longitude: number;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: any;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id: string;
  from_accepted_tag: boolean;
  upload_id_str: string;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  average_temp: number;
  average_watts: number;
  weighted_average_watts: number;
  kilojoules: number;
  device_watts: boolean;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  max_watts: number;
  elev_high: number;
  elev_low: number;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  suffer_score: number;
}
