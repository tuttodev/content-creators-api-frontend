'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import {Navigation } from 'swiper/modules';
import { FaGithub, FaTwitter, FaTwitch, FaYoutube, FaInstagram } from 'react-icons/fa';
import {useContentCreators} from "@/app/_providers/ContentCreatorsProvider";
import { Tooltip } from 'react-tooltip';

export const ContentCreatorsSliderSection = () => {
  const { contentCreators } = useContentCreators();

    return (
        <div className='mt-20 h-full'>
            <div className={'flex justify-center items-center'}>
              <Swiper
                modules={[Navigation]}
                navigation
                pagination={{ clickable: true }}
                className={'w-10/12 h-full'}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
              >
                {contentCreators.map((creator) => (
                  <SwiperSlide key={creator.id}>
                    <div className="flex flex-col items-center">
                      <Image src={creator.logoUrl} alt={creator.name} width={200} height={200} className="mb-4" />
                      <h2 className="text-3xl font-bold">{creator.name}</h2>
                      <p className="text-gray-500">{creator.language}</p>
                      <div className="flex space-x-6 mt-6">
                        { creator.socialNetworks.github && (
                          <div data-tooltip-id="x-tooltip"
                               data-tooltip-html={creator.socialNetworks.github.map(x => `<a href="https://github.com/${x}" target="_blank">${x}</a>`).join('<br/>')}>
                            <FaGithub size={32}/>
                          </div>
                        )}
                        { creator.socialNetworks.x && (
                          <div data-tooltip-id="x-tooltip"
                               data-tooltip-html={creator.socialNetworks.x.map(x => `<a href="https://x.com/${x}" target="_blank">${x}</a>`).join('<br/>')}>
                            <FaTwitter size={32}/>
                          </div>
                        )}
                        { creator.socialNetworks.twitch && (
                          <div data-tooltip-id="twitch-tooltip"
                               data-tooltip-html={creator.socialNetworks.twitch.map(x => `<a href="https://twitch.tv/${x}" target="_blank">${x}</a>`).join('<br/>')}>
                            <FaTwitch size={32}/>
                          </div>
                        )}
                        { creator.socialNetworks.youtube && (
                          <div data-tooltip-id="youtube-tooltip"
                             data-tooltip-html={creator.socialNetworks.youtube.map(x => `<a href="https://youtube.com/${x}" target="_blank">${x}</a>`).join('<br/>')}>
                            <FaYoutube size={32}/>
                          </div>
                        )}
                        { creator.socialNetworks.ig && (
                          <a target="_blank" data-tooltip-id="ig-tooltip"
                             data-tooltip-html={creator.socialNetworks.ig.map(x => `<a href="https://instagram.com/${x}" target="_blank">${x}</a>`).join('<br/>')}>
                            <FaInstagram size={32}/>
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Tooltip id="youtube-tooltip" clickable place='bottom' />
            <Tooltip id="ig-tooltip" clickable place='bottom' />
            <Tooltip id="twitch-tooltip" clickable place='bottom' />
            <Tooltip id="x-tooltip" clickable place='bottom' />
            <Tooltip id="github-tooltip" clickable place='bottom' />
        </div>
    )
}