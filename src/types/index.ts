export type CarDetails = {
  id: string;
  u_r_l: string;
  make: string;
  model: string;
  card_basic_details: {
    useable_battery: number;
    real_range: number;
    efficiency: number;
  }[];
  price: {
    united_kingdom: number;
    the_netherlands: number;
    germany: number;
  };
  availableto_order: {
    united_kingdom: number;
    the_netherlands: number;
    germany: number;
  };
  real_range_estimation: {
    cold_weather: {
      city_cold_weather: number;
      highway_cold_weather: number;
      combined_cold_weather: number;
    };
    mild_weather: {
      city_mild_weather: number;
      highway_mild_weather: number;
      combined_mild_weather: number;
    };
  };
  performance: {
    acceleration0100kmh: number;
    top_speed: number;
    electric_range: number;
    total_power: number;
    total_torque: number;
    drive: string;
  };
  battery: {
    nominal_capacity: number;
    battery_type: string;
    numberof_cells: number;
    architecture: number;
    warranty_period: number;
    warranty_mileage: number;
    useable_capacity: number;
    cathode_material: string;
    pack_configuration: number;
    nominal_voltage: number;
    form_factor: string;
    name_reference: number;
  };
  charging: {
    home_destination: {
      charge_port: string;
      port_location: string;
      charge_power: number;
      charge_time0415km: number;
      charge_speed: number;
      charge_powermax: number;
      charge_power1080: number;
      autocharge_supported: string;
      plug_charge_supported: string;
      supported_protocol: string;
    };
    fast_charging: {
      charge_port: string;
      port_location: string;
      charge_powermax: number;
      charge_power1080: number;
      charge_speed: number;
      autocharge_supported: string;
      plug_charge_supported: string;
      supported_protocol: string;
    };
    plug_charge: {
      plug_charge_supported: string;
      supported_protocol: string;
    };
  };
  bidirectional_charging_v2_x_b_p_t: {
    vehicleto_load_v2_l: {
      v2_l_supported: string;
      max_output_power: string;
      exterior_outlets: string;
      interior_outlets: string;
    };
    vehicleto_home_v2_h: {
      v2_hvia_a_c_supported: string;
      max_output_power: string;
      v2_hvia_d_c_supported: string;
    };
    vehicleto_grid_v2_g: {
      v2_gvia_a_c_supported: string;
      max_output_power: string;
      v2_gvia_d_c_supported: string;
    };
  };
  energy_consumption: {
    e_v_d_b_real_range: {
      range: number;
      vehicle_consumption: number;
      c_o2_emissions: number;
      vehicle_fuel_equivalent: number;
    };
    w_l_t_p_ratings_t_e_l: {
      range: number;
      rated_consumption: number | string;
      vehicle_consumption: number;
      c_o2_emissions: number;
      rated_fuel_equivalent: number | string;
      vehicle_fuel_equivalent: number;
    };
    w_l_t_p_ratings_t_e_h: {
      range: number;
      rated_consumption: string;
      vehicle_consumption: number;
      c_o2_emissions: number;
      rated_fuel_equivalent: string;
      vehicle_fuel_equivalent: number;
    };
  };
  real_energy_consumption_estimation: {
    cold_weather: {
      city_cold_weather: number;
      highway_cold_weather: number;
      combined_cold_weather: number;
    };
    mild_weather: {
      city_mild_weather: number;
      highway_mild_weather: number;
      combined_mild_weather: number;
    };
  };
  dimensionsand_weight: {
    acceleration0100kmh: number;
    top_speed: number;
    electric_range: number;
    total_power: number;
    total_torque: number;
    drive: string;
  };
  miscellaneous: {
    nominal_capacity: number;
    battery_type: string;
    numberof_cells: number;
    architecture: number;
    warranty_period: number;
    warranty_mileage: number;
    useable_capacity: number;
    cathode_material: string;
    pack_configuration: number;
    nominal_voltage: number;
    form_factor: string;
    name_reference: number;
  };
};
