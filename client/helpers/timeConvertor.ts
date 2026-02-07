

export const timeConvertor = (time: number): string => {
    const minutes = Math.ceil(time/60)
    const seconds = time%60 > 9 ? time%60 : '0' + time%60 
    return  minutes + ":" + seconds
}