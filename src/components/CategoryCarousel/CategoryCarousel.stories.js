import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import CategoryCarousel from './CategoryCarousel'

export default {
  component: CategoryCarousel,
  title: 'CategoryCarousel',
  decorators: [Story => <Provider store={store}><BrowserRouter><Story /></BrowserRouter></Provider>]
}

const Template = args => <CategoryCarousel {...args} />

export const Default = Template.bind({})
Default.args = {
  category: 'entertainment',
  categoryItems: [{
    title: "Freddie Mercury: The FINAL woman in his life 'They were intensely in love, shared a bed' - Express",
    description: "FREDDIE MERCURY 'intensely loved' another woman after Mary Austin and they remained devoted until the end of his life. Barbara was an outrageous star, known as 'the Queen of Nudity' and Freddie's closest friends said he had finally met his match during two ou…",
    urlToImage: 'https://cdn.images.express.co.uk/img/dynamic/35/750x445/1351700.jpg'
  }, {
    title: 'Roald Dahl’s The Witches: Will Gompertz reviews the film starring Anne Hathaway ★★★☆☆ - BBC News',
    description: 'The writers have failed to grasp the essence of Roald Dahl, as a master craftsman of the English language.',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/11A2B/production/_115053227_11a06d62-9e5c-4c62-8efd-dcacec2a8abe.jpg'
  }, {
    title: 'Denise Welch, 62, shows off ageless figure and perfect pins in plunging swimsuit - Mirror Online',
    description: 'Loose Women star Denise Welch admitted that she was super proud of herself for managing to keep the weight off after she overhauled her lifestyle seven years ago',
    urlToImage: 'https://i2-prod.mirror.co.uk/incoming/article22897868.ece/ALTERNATES/s1200/1_Denise-Townley.jpg'
  }, {
    title: "I'm A Celebrity 'lineup is revealed as Ruthie Henshall and Russell Watson sign on for the show' - Daily Mail",
    description: 'The actress, 53, and tenor, 53, were seen arriving at what was reported to be a promo photoshoot in London on Friday ahead of kicking off their isolation period before filming starts in Wales.',
    urlToImage: 'https://i.dailymail.co.uk/1s/2020/10/23/23/34770572-0-image-a-137_1603492764610.jpg'
  }, {
    title: "Strictly's HRVY reveals he 'LOVES' co-star Maisie Smith...after the pair exchanged flirty messages - Daily Mail",
    description: "Strictly's HRVY, 21, has revealed he 'loves' co-star Maisie Smith and told how she 'looked incredible' when he saw her wearing the glittering blue dress for the launch show.",
    urlToImage: 'https://i.dailymail.co.uk/1s/2020/10/24/00/34771508-0-image-a-13_1603494875945.jpg'
  }]
}
