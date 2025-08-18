/*
    /countries
 */
export interface CountriesRequest { } // no parameters

export interface CountryData {
    isoTwo: string
    isoThree: string
    numeric: string
    name: string
    officialName: string
    capital: string
    currency: string
}

export interface CountriesResponse {
    data: Array<CountryData>
}

/*
    /instrument_type
 */
export interface InstrumentTypeRequest { } // no parameters

export interface InstrumentTypeResponse {
    result: Array<string>
}

/*
    /technical_indicators
 */
export interface TechnicalIndicatorsRequest { } // no parameters

export interface OutputValue {
    defaultColor: string
    display: string
    minRange: number
    maxRange: number
}

export interface Parameter {
    default: number
    maxRange: number
    minRange: number
    range: string[]
    type: string
}

export interface Tinting {
    display: string
    color: string
    transparency: number
    lowerBound: string
    upperBound: string
}

export interface TechnicalIndicatorData {
    enable: boolean
    fullName: string
    description: string
    type: string
    overlay: boolean
    outputValues: Record<string, OutputValue>
    parameters: Record<string, Parameter>
    tinting: Tinting
}

export interface TechnicalIndicatorsResponse {
    data: Record<string, TechnicalIndicatorData>
}