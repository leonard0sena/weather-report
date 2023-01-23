import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonWeekWrapper, SkeletonDayWrapper } from './style.js'

export const DayCardSkeleton = () => {
    return (
        <SkeletonDayWrapper>
            <div className='left-side-wrapper'>
                <Skeleton circle width={90} height={90}/>
                <Skeleton width={100}/>
                <Skeleton width={120}/>
            </div>
            <div className='right-side-wrapper'>
                <Skeleton width={70}/>
                <Skeleton width={100}/>
                <Skeleton width={100}/> 
            </div>
        </SkeletonDayWrapper>
    )
}

export const WeekCardSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map((item, index) =>
        <SkeletonWeekWrapper key={index}>
            <div className='info-wrapper'>
                <Skeleton width={120}/>
                <Skeleton width={70}/>
                <Skeleton width={50}/>
                <Skeleton width={180}/>
            </div>
        </SkeletonWeekWrapper>
        )
    )
}