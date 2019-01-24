export const setHighIntensity = (settings) => {
  return {
    type: 'SET_HIGH_INTENSITY',
    settings
  }
}

export const setLowIntensity = (settings) => {
  return {
    type: 'SET_LOW_INTENSITY',
    settings
  }
}

export const setCustomSettings = (settings) => {
  return {
    type: 'SET_CUSTOM_SETTINGS',
    settings
  }
}

export const updateRunning = () => {
  return {
    type: 'UPDATE_RUNNING',
  }
}

export const stopRunning = () => {
  return {
    type: 'STOP_RUNNING',
  }
}

export const updateRunningSets = (runningSets) => {
  return {
    type: 'UPDATE_RUNING_SETS',
    runningSets
  }
}

export const restCountdown = (currentSeconds, elapsedTime) => {
  return {
    type: 'REST_COUNTDOWN',
    currentSeconds,
    elapsedTime
  }
}

export const intervalCountdown = (currentSeconds, elapsedTime) => {
  return {
    type: 'INTERVAL_COUNTDOWN',
    currentSeconds,
    elapsedTime

  }
}

export const reloadTimer = (sets, running_sets, interval, rest ) => {
  return {
    type: 'RELOAD_TIMER',
    sets,
    running_sets,
    interval,
    rest
  }
}

export const setCurrentSettings = (settings) => {
  return {
    type: 'SET_CURRENT_SETTINGS',
    settings
  }
}



