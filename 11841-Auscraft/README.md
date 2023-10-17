# 11841-Auscraft

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit



Introduction

The development of “Auscraft”, a novel web application, attempts to connect the immensely popular virtual Minecraft realm and the real-world experiences of its players. The app’s premise revolves around user interaction and discovery in a highly engaging visual format. By enabling users to input an Australian city, it uses a weather API to retrieve current environmental data and undergo comparative analysis against that of various Minecraft biomes. This attempt aimed to encapsulate the essence of the Minecraft game within a web-based platform. Additionally, it offers a functional, intuitive, and accessible user experience while swaying from convention, delivering an innovative and engaging approach to user experience.

Development Process	

The main factor influencing my choice of Vue 3 as the framework for “Auscraft” was the need for robust and seamless integration of visual elements. Features like continuous video and audio playback, which were vital to replicating the immersive Minecraft experience, posed challenges without this framework. Vue’s unique capabilities allowed for dynamic route navigation within a single frame, effectively transforming the web application into a single-page application (SPA). However, this decision required significantly more time investment and self-directed study.

Despite achieving the desired results, certain components within the application do not strictly adhere to Vue’s standards, particularly with component size. As a beginner of this structure, vanilla JavaScript and CSS were sometimes used instead of Vue components as a last resort. For instance, the search bar component had unsolvable bugs in Vue format, so this was not used, unfortunately, the component is too large and convoluted to separate now.

In retrospect, “Auscraft” does not fully maximise Vue’s potential, and therefore may be unnecessary, however, the decision to go this route was well-calculated. Aligning effectively with the assignment brief, this experience has served as a foundation for future projects, where the use of frameworks is common practice.

API Usage

The integration of weather API (Weather and Geolocation API - Weather and Geolocation API JSON and XML - WeatherAPI.Com, n.d.) significantly enhanced the “Auscraft” application. This provided users with real-time weather data, including temperature and humidity, and improved user experience by offering autofill suggestions in the search bar. Using historical data was the initial consideration, but creating averages was too broad for whole cities. Consequently, the decision was made to focus on current data, providing more dynamic and relevant results. Retrieving biome data (Biome, 2023) from Minecraft documentation was challenging due to limited access to information. As a result, creating a custom dataset with the necessary variables was more applicable. Integrating a Google Sheets API with OAuth was impractical too, so importing the.json file to the code was the best method of incorporating the data.

The data comparison involved scaling Minecraft data to real-world values using AI, subtracting them from current weather data, and then combining the results into a similarity score. The smallest score determined the biome most like the city, with random selection in cases of ties.

Potential Improvements

To enhance the program, several improvements could be implemented. Firstly, the addition of a click sound on button press, an iconic component of the Minecraft experience, to further immerse users. This was attempted previously, but the high data intensity of the code led to a delay in response feedback and negatively impacted the overall experience.

Secondly, the inclusion of 404 error pages and restrictions to page access within the navigation could refine the user journey. For instance, the results page should only be accessible once a user inputs a city, rather than directly through URL navigation.

As previously mentioned, the biome data comparison could be further fine-tuned to enhance the accuracy of the matching calculations. However, this cannot be implemented easily due to limited access to data.

Conclusion

In summary, “Auscraft” connects Minecraft’s virtual world with the user through engaging user interface. Vue 3, although challenging, provided a strong foundation of knowledge for industry techniques and standards.

Despite its limitations, “Auscraft”, is well-equipped for future improvements, emphasising the importance of user feedback and ongoing development for this type of application. User testing in the next assignment aims to gather valuable insights into user interactions and uncover bugs within the code, contributing to the refinement of this program.

References

brinjal66. ‘The RL Temperature of Minecraft Biomes Revealed!’ Reddit Post. R/Minecraft, 24 July 2015. www.reddit.com/r/Minecraft/comments/3eh7yu/the_rl_temperature_of_minecraft_biomes_revealed/.
CodePen. ‘Pure CSS Animated Ellipsis’. Accessed 17 October 2023. https://codepen.io/thetallweeks/details/yybGra.
‘Dc937-16642931412379.Png 796×727 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2022/09/dc937-16642931412379.png.
‘Dd17e-16383656954590-1920.Jpg 1,920×1,080 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2021/12/dd17e-16383656954590-1920.jpg.
DOWNLOAD: Minecraft 1.20 Panorama Background - PERFECT LOOP & Free, 2023. https://www.youtube.com/watch?v=erHrY-D2zbA.
‘E71wDfwWQAEaSZ9.Jpg:Large 1,696×866 Pixels’. Accessed 17 October 2023. https://pbs.twimg.com/media/E71wDfwWQAEaSZ9.jpg:large.
‘Eae96-16358725730459-1920.Jpg 700×371 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2021/11/eae96-16358725730459-1920.jpg?w=700.
‘Ecc48-16574219187836-1920.Jpg 1,920×1,080 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2022/07/ecc48-16574219187836-1920.jpg.
‘Epic Spinners’. Accessed 17 October 2023. https://epic-spinners.epicmax.co/.
‘EvjcBGfWgAEUOeg.Jpg:Large 1,920×1,080 Pixels’. Accessed 17 October 2023. https://pbs.twimg.com/media/EvjcBGfWgAEUOeg.jpg:large.
‘F6dda-16374041307835-1920.Jpg 1,920×1,200 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2021/11/f6dda-16374041307835-1920.jpg.
‘Fc033-16615240285410-1920.Jpg 1,920×1,080 Pixels’. Accessed 17 October 2023. https://staticg.sportskeeda.com/editor/2022/08/fc033-16615240285410-1920.jpg.
‘Flower-Forest.Webp 1,920×1,080 Pixels’. Accessed 17 October 2023. https://assets.badlion.net/blog/1-20/find-flowers-minecraft/flower-forest.webp.
‘Forest_V2.Png 1,280×720 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/6/6b/Forest_V2.png?width=1280.
‘FpNOG6hWcAAG7Mu.Jpg:Large 1,920×1,080 Pixels’. Accessed 17 October 2023. https://pbs.twimg.com/media/FpNOG6hWcAAG7Mu.jpg:large.
‘Jungle.Png 3,840×2,160 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/a/ae/Jungle.png.
‘Latest 1,920×1,017 Pixels’. Accessed 17 October 2023. https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c3/Wooded_Mountains.png/revision/latest?cb=20220208201934.
‘Latest 1,920×1,080 Pixels’. Accessed 17 October 2023. https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Shattered_Savanna.png/revision/latest?cb=20220323223516.
‘Latest 1,920×1,080 Pixels’. Accessed 17 October 2023. https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ab/Frozen_Peaks_1.18.png/revision/latest?cb=20220420161528.
‘Latest 1,920×1,080 Pixels’. Accessed 17 October 2023. https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/01/Crimson_Forest.png/revision/latest?cb=20210505015156.
‘LHk2S4ccdKv3qNPb6EtLtn.Jpg 1,920×1,080 Pixels’. Accessed 17 October 2023. https://cdn.mos.cms.futurecdn.net/LHk2S4ccdKv3qNPb6EtLtn.jpg.
‘Magnifying_glass.Png 256×256 Pixels’. Accessed 17 October 2023. https://wiki.chisels-and-bits.com/assets/images/items/chiselsandbits/magnifying_glass.png.
‘Minecraft-Dripstone-Caves.Jpg 1,920×1,080 Pixels’. Accessed 17 October 2023. https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/10/minecraft-dripstone-caves.jpg.
‘Minecraft__warped_forest__by_fenrate_deyprjy-Pre.Jpg 1,192×670 Pixels’. Accessed 17 October 2023. https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4faaae78-5aa4-4305-b9c9-21d6dca10808/deyprjy-5dca81fa-c398-40f5-88e3-13e0475751d6.png/v1/fill/w_1192,h_670,q_70,strp/minecraft__warped_forest__by_fenrate_deyprjy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNGZhYWFlNzgtNWFhNC00MzA1LWI5YzktMjFkNmRjYTEwODA4XC9kZXlwcmp5LTVkY2E4MWZhLWMzOTgtNDBmNS04OGUzLTEzZTA0NzU3NTFkNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wsWVlIvu8w8tU8aF6j2o9cFgyrESJAyi5ZJ23ANy1bw.
‘Minecraft-Winter-Seed.Png 1,920×1,017 Pixels’. Accessed 17 October 2023. https://blog.shockbyte.com/content/images/2022/12/Minecraft-Winter-Seed.png.
‘MwlAYdk.Png 1,920×1,057 Pixels’. Accessed 17 October 2023. https://i.imgur.com/MwlAYdk.png.
‘Netherview.Jpg 1,920×1,138 Pixels’. Accessed 17 October 2023. https://tagn.files.wordpress.com/2020/07/netherview.jpg.
‘Peaks_-_Stony_Peaks_V2.Png 3,840×2,160 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/5/58/Peaks_-_Stony_Peaks_V2.png.
‘Question-Mark-Exclamation-Mark-21347606.Png 288×256 Pixels’. Accessed 17 October 2023. https://www.minecraftskins.com/uploads/preview-skins/2023/02/19/question-mark-exclamation-mark-21347606.png?v568.
‘Reddit - Https://I.Redd.It/2s6i8vqxo2s71.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F2s6i8vqxo2s71.png.
‘Reddit - Https://I.Redd.It/9wy7v8io2mr41.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F9wy7v8io2mr41.png.
‘Reddit - Https://I.Redd.It/F1ze77o394c51.Jpg’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Ff1ze77o394c51.jpg.
‘Reddit - Https://I.Redd.It/K5aucej2qe481.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fk5aucej2qe481.png.
‘Reddit - Https://I.Redd.It/L5y2c62bri881.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fl5y2c62bri881.png.
‘Reddit - Https://I.Redd.It/Ozyn4zdoc9q21.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fozyn4zdoc9q21.png.
‘Reddit - Https://I.Redd.It/U1oya2mkod951.Png’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fu1oya2mkod951.png.
‘Reddit - Https://Preview.Redd.It/Seed-with-Sparse-Jungle-v0-3pfhrnvfsw5a1.Png?Width=1440&format=png&auto=webp&s=751414f692761c890dcc93a70e3b5a5a5c2aa681’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fseed-with-sparse-jungle-v0-3pfhrnvfsw5a1.png%3Fwidth%3D1440%26format%3Dpng%26auto%3Dwebp%26s%3D751414f692761c890dcc93a70e3b5a5a5c2aa681.
‘Reddit - Https://Preview.Redd.It/Seed-with-Sparse-Jungle-v0-D6d0envfsw5a1.Png?Width=1440&format=png&auto=webp&s=7c3772d721d9607eb69a70f5275b70b20a7ce02b’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fseed-with-sparse-jungle-v0-d6d0envfsw5a1.png%3Fwidth%3D1440%26format%3Dpng%26auto%3Dwebp%26s%3D7c3772d721d9607eb69a70f5275b70b20a7ce02b.
‘Reddit - Https://Preview.Redd.It/Snowy-Old-Growth-Taigas-v0-40swn7jfe6y91.Png?Width=1920&format=png&auto=webp&s=4e8f15bf38eee632a4723f3177ea2cc543c4bff0’. Accessed 17 October 2023. https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsnowy-old-growth-taigas-v0-40swn7jfe6y91.png%3Fwidth%3D1920%26format%3Dpng%26auto%3Dwebp%26s%3D4e8f15bf38eee632a4723f3177ea2cc543c4bff0.
‘River_-_Frozen_River.Png 1,280×720 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/2/2d/River_-_Frozen_River.png?width=1280.
slorge. ‘My First Encounter with the Ice Plains Spike Biome in Vanilla. Beautiful Surprise...’ Reddit Post. R/Minecraft, 12 November 2017. www.reddit.com/r/Minecraft/comments/7ccs3z/my_first_encounter_with_the_ice_plains_spike/.
‘Swamp_-_Mangroves.Png 1,280×720 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/7/7c/Swamp_-_Mangroves.png?width=1280.
‘Taiga_-_Old_Growth_Taiga.Png 1,280×720 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/0/01/Taiga_-_Old_Growth_Taiga.png?width=1280.
‘Weather and Geolocation API - Weather and Geolocation API JSON and XML - WeatherAPI.Com’. Accessed 17 October 2023. https://www.weatherapi.com/docs/.
‘Windswept_Hills_V2.Png 3,840×2,160 Pixels’. Accessed 17 October 2023. https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/6/61/Windswept_Hills_V2.png.




```
