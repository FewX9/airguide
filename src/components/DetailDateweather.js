export default function DetailDateweather({ children }) {
    return (
        <>
            <div id="todayDetails" class=" removeIfEmpty">
                <section aria-label="สภาพอากาศวันนี้ใน เขตธนบุรี" class="card Card--card--2AzRg Card--containerQuery--T7772" data-testid="TodaysDetailsModule" title="สภาพอากาศวันนี้ใน เขตธนบุรี">
                    <header data-testid="HeaderTitle" class="Card--cardHeader--3NRFf">
                        <h2 class="Card--cardHeading--2H1-_">สภาพอากาศวันนี้ใน เขตธนบุรี</h2>
                    </header>
                    <div class="Card--content--1GQMr">
                        <div data-testid="TodaysDetailsHeader" class="TodayDetailsCard--hero--2QGgO">
                            <div data-testid="FeelsLikeSection" class="TodayDetailsCard--feelsLikeTemp--2x1SW"><span data-testid="FeelsLikeLabel" class="TodayDetailsCard--feelsLikeTempLabel--1UNV1">รู้สึกเหมือน</span><span class="TodayDetailsCard--feelsLikeContainer--2bePz"><span data-testid="TemperatureValue" class="TodayDetailsCard--feelsLikeTempValue--2icPt">37<span>°</span></span></span></div>
                            <div id="SunriseSunsetContainer-fd88de85-7aa1-455f-832a-eacb037c140a">
                                <div>
                                    <div data-testid="sunriseSunsetContainer" class="TwcSunChart--sunriseSunsetContainer--XnzEy">
                                        <svg data-testid="TwcSunChartGraph" class="TwcSunChart--graph--1Heo5" width="107" height="67">
                                            <path d="M -13.5 26.5 a 1 1 0 0 0 80 0" class="TwcSunChart--graphPath--2PCWi" style="transform-origin: 40px 40px;"></path>
                                            <g style="transform: translate(80.7633px, 33.8584px);">
                                                <svg set="current-conditions" name="daylight2" theme="" class="Icon--icon--2aW0V" data-testid="Icon" aria-hidden="true">
                                                    <title>Daylight</title>
                                                    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
                                                    <path fill="#F7C044" d="M18.405 17.661a1 1 0 0 1-1.437 1.391l-1.665-1.72a1 1 0 1 1 1.437-1.39l1.665 1.72zm-5.541 2.651a1 1 0 0 1-2 0v-2.366a1 1 0 1 1 2 0v2.366zm-6.718-1.624a1 1 0 0 1-1.357-1.469l1.758-1.624a1 1 0 1 1 1.357 1.47l-1.758 1.623zm-2.753-5.769a1 1 0 1 1 .002-2l2.422.001a1 1 0 0 1-.001 2l-2.423-.001zm1.77-6.115A1 1 0 0 1 6.6 5.414l1.664 1.719a1 1 0 0 1-1.436 1.391l-1.665-1.72zm5.751-3.391a1 1 0 1 1 2 0v2.366a1 1 0 0 1-2 0V3.413zm6.5 1.903a1 1 0 1 1 1.356 1.47l-1.757 1.623a1 1 0 1 1-1.357-1.47l1.758-1.623zm3.005 6.114a1 1 0 0 1-.002 2l-2.422-.001a1 1 0 0 1 .001-2l2.423.001z"></path>
                                                    <ellipse fill="#F7C044" cx="11.85" cy="11.935" rx="3.225" ry="3.256"></ellipse>
                                                </svg>
                                            </g>
                                        </svg>
                                        <div class="TwcSunChart--datesContainer--3MzoF">
                                            <div data-testid="SunriseValue" class="TwcSunChart--sunriseDateItem--2rx9O">
                                                <svg class="Icon--icon--2aW0V TwcSunChart--sunIcon--FDjHW" set="current-conditions" name="sunrise-line" theme="" data-testid="Icon" viewBox="0 0 24 24">
                                                    <title>Sun Rise</title>
                                                    <path d="M10.862 6.052v5.329a.75.75 0 0 0 1.5 0V6.036l1.772 1.534a.75.75 0 0 0 .982-1.134l-3.003-2.601a.75.75 0 0 0-.982 0L8.128 6.436A.75.75 0 0 0 9.11 7.57l1.752-1.518zM21 19.128a.75.75 0 0 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z"></path>
                                                </svg>
                                                <p class="TwcSunChart--dateValue--2WK2q">6:11</p>
                                            </div>
                                            <div data-testid="SunsetValue" class="TwcSunChart--sunsetDateItem--1yXlg TwcSunChart--sunriseDateItem--2rx9O">
                                                <svg class="Icon--icon--2aW0V TwcSunChart--sunIcon--FDjHW" set="current-conditions" name="sunset-line" theme="" data-testid="Icon" viewBox="0 0 24 24">
                                                    <title>Sunset</title>
                                                    <path d="M10.862 9.853L9.044 8.278a.75.75 0 1 0-.982 1.134l3.003 2.602a.75.75 0 0 0 .982 0l3.004-2.602a.75.75 0 0 0-.983-1.134l-1.706 1.478V4a.75.75 0 0 0-1.5 0v5.853zM21 19.075a.75.75 0 1 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z"></path>
                                                </svg>
                                                <p class="TwcSunChart--dateValue--2WK2q">17:52</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="TodayDetailsCard--detailsContainer--2yLtL">
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="temp" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>Temperature</title>
                                    <path d="M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">สูง / ต่ำ</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q"><span data-testid="TemperatureValue">--</span>/<span data-testid="TemperatureValue">26<span>°</span></span></div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="wind" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>Wind</title>
                                    <path d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742" stroke-width="2" stroke="currentColor" stroke-linecap="round" fill="none"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ลม</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q">
                                    <span data-testid="Wind" class="Wind--windWrapper--3Ly7c undefined">
                                        <span>
                                            <svg data-testid="Icon" class="Icon--icon--2aW0V Icon--darkTheme--1PZ-8" style="transform:rotate(140deg)" set="current-conditions" name="wind-direction" theme="dark" viewBox="0 0 24 24">
                                                <title>Wind Direction</title>
                                                <path stroke="currentColor" fill="none" d="M18.467 4.482l-5.738 5.738a1.005 1.005 0 0 1-1.417 0L5.575 4.482l6.446 16.44 6.446-16.44z"></path>
                                            </svg>
                                        </span>
                                        <span>0</span>&nbsp;<span>กม./ชม.</span>
                                    </span>
                                </div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="humidity" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>Humidity</title>
                                    <path fill-rule="evenodd" d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ความชื้น</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q"><span data-testid="PercentageValue">72%</span></div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="dewpoint" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>Dew Point</title>
                                    <path d="M17 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                    <path fill-rule="evenodd" d="M9.743 18.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M9.855 5c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772C9.245 5.14 9.54 5 9.855 5"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">จุดน้ำค้าง</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q"><span data-testid="TemperatureValue">25<span>°</span></span></div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="pressure" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>Barometric Pressure</title>
                                    <path d="M8.462 18.293l-.29-.002c-.6-.004-1.043-.007-1.259-.007-1.119 0-1.182-1.015-.34-1.734l.196-.164.508-.425 1.543-1.292c1.014-.846 1.74-1.45 2.073-1.723.735-.601 1.305-.596 2.033.022.387.329.959.805 2.207 1.841a377.936 377.936 0 0 1 2.18 1.816c.796.67.742 1.66-.295 1.66h-2.382v1.77c0 .83-.393 1.223-1.258 1.223h-2.994c-.809 0-1.258-.42-1.258-1.207v-1.773l-.664-.005zm0-12.807l-.29.002c-.6.004-1.043.006-1.259.006-1.119 0-1.182 1.016-.34 1.734l.196.164.508.426 1.543 1.29a348.68 348.68 0 0 0 2.073 1.724c.735.601 1.305.596 2.033-.022.387-.328.959-.805 2.207-1.84a377.937 377.937 0 0 0 2.18-1.817c.796-.67.742-1.659-.295-1.659h-2.382v-1.77c0-.832-.393-1.224-1.258-1.224h-2.994c-.809 0-1.258.42-1.258 1.207V5.48l-.664.005z"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ความดัน</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q">
                                    <span data-testid="PressureValue" class="Pressure--pressureWrapper--3SCLm undefined">
                                        <svg set="ui" name="arrow-down" class="Icon--icon--2aW0V" theme="" data-testid="Icon" viewBox="0 0 24 24">
                                            <title>Arrow Down</title>
                                            <path d="M11 2.5a1 1 0 0 1 2 0v19a1 1 0 0 1-2 0v-19z"></path>
                                            <path d="M12 20.086l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 1.414-1.414L12 20.086z"></path>
                                        </svg>
                                        1007.5 มิลลิบาร์
                                    </span>
                                </div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="uv" theme="dark" data-testid="Icon" viewBox="0 0 24 24">
                                    <title>UV Level</title>
                                    <path d="M7.4 5.598a.784.784 0 0 1 .25-.92c.335-.256.824-.197 1.02.062.066.063.066.063.08.085l2.406 3.152-.626.238a3.983 3.983 0 0 0-1.097.633l-.522.424L7.4 5.598zm4.539 2.358c-.21 0-.418.017-.625.05l-.664.106.09-.666.438-3.266c.013-.072.013-.072.012-.057a.783.783 0 0 1 .666-.616.78.78 0 0 1 .872.639l.006.038.507 3.933-.662-.108a3.957 3.957 0 0 0-.64-.053zm-7.781 3.19l.026-.004 3.934-.507-.108.662a3.98 3.98 0 0 0-.003 1.266l.105.664-.665-.09-3.265-.439a.784.784 0 0 1-.676-.679c-.054-.42.238-.809.63-.869l.022-.004zm11.504-.617a3.98 3.98 0 0 0-.632-1.097l-.425-.522.623-.256 3.056-1.256a.787.787 0 0 1 .916.253c.256.337.199.817-.104 1.063l-.045.037-3.151 2.405-.238-.627zm-1.205-1.672a3.984 3.984 0 0 0-1.095-.637l-.626-.24.41-.532 2.008-2.602c.059-.07.059-.07.046-.052a.78.78 0 0 1 1.306.227c.076.185.079.39.02.54l-.021.06-1.528 3.662-.52-.426zM4.595 7.793c.162-.387.611-.58.971-.441.017.004.017.004.055.02L9.283 8.9l-.425.52a3.985 3.985 0 0 0-.636 1.094l-.24.627-3.144-2.425a.784.784 0 0 1-.243-.924zm14.443 7.367c.054.045.054.045.044.04a.784.784 0 0 1 .199.884c-.163.386-.61.58-.964.443-.024-.006-.024-.006-.062-.022l-3.662-1.529.426-.52a3.98 3.98 0 0 0 .636-1.094l.241-.626 3.142 2.424zm1.332-3.303c.053.422-.239.809-.63.87l-.035.006-3.945.508.108-.662a3.999 3.999 0 0 0 .003-1.266l-.105-.663.665.09 3.272.44c.068.012.068.012.052.01a.784.784 0 0 1 .615.667zm-3.894 6.421c.024.068.024.068.017.053a.786.786 0 0 1-.27.87c-.332.25-.816.194-1.047-.091-.022-.023-.022-.023-.05-.058l-2.406-3.154.626-.237a3.977 3.977 0 0 0 1.097-.632l.523-.425 1.51 3.674zm-8.26-4.932c.151.397.365.767.633 1.097l.424.522-.622.256-3.054 1.255a.787.787 0 0 1-.92-.25.781.781 0 0 1-.154-.58c.027-.199.127-.379.227-.452.045-.046.045-.046.075-.069l3.153-2.406.238.627zm3.723 2.572c.209 0 .417-.016.625-.049l.662-.103-.089.664-.438 3.26-.012.062a.785.785 0 0 1-.666.618c-.048.005-.048.005-.101.006-.386 0-.714-.28-.764-.612-.01-.043-.01-.043-.014-.072l-.507-3.934.662.108c.213.035.427.052.642.052zM7.366 18.27l.006-.015L8.9 14.592l.52.426a3.99 3.99 0 0 0 1.094.636l.626.241-.41.531-2.012 2.609-.04.046a.788.788 0 0 1-.886.2.787.787 0 0 1-.428-1.011z"></path>
                                    <path d="M11.911 14.322a2.411 2.411 0 1 0 0-4.822 2.411 2.411 0 0 0 0 4.822zm0 2a4.411 4.411 0 1 1 0-8.822 4.411 4.411 0 0 1 0 8.822z"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ดัชนี UV</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q"><span data-testid="UVIndexValue">0 ของ 11</span></div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="current-conditions" name="visibility" theme="dark" data-testid="Icon" width="1024" height="1024" viewBox="0 0 1024 1024">
                                    <title>Visibility</title>
                                    <path d="M491.856 879.808c-60.48-5.056-110.848-25.184-171.328-55.424-120.96-55.424-216.704-146.112-292.256-256.96-25.248-40.352-30.24-80.64 0-126.016 80.608-115.872 186.464-211.68 317.472-272.096 110.816-50.4 226.752-50.4 337.664 0 136 60.48 241.824 156.224 317.44 282.208 15.104 25.216 25.12 65.504 10.048 85.728-105.792 191.424-256.992 367.84-519.04 342.56zm292.256-377.92c0-151.168-120.96-272.064-272.096-272.064-146.144 0-272.128 126.016-272.128 272.064 0 151.232 120.96 277.216 272.128 277.216 151.104-.032 272.096-125.984 272.096-277.216z"></path>
                                    <path d="M789.808 500.416c0 156.896-125.472 287.52-282.336 282.336-156.864 0-282.336-130.656-282.336-287.488 0-146.4 130.656-277.12 282.336-277.12 156.896-.032 287.584 125.376 282.336 282.272zM512.752 348.832c-83.68 0-151.584 67.968-151.584 151.584 0 88.864 67.968 156.896 151.584 156.896 83.648 0 156.832-73.216 156.832-156.896-5.184-83.648-73.152-151.584-156.832-151.584z"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ทัศนวิสัย</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q"><span data-testid="VisibilityValue">9.66 กม.</span></div>
                            </div>
                            <div class="ListItem--listItem--25ojW WeatherDetailsListItem--WeatherDetailsListItem--1CnRC" data-testid="WeatherDetailsListItem">
                                <svg class="WeatherDetailsListItem--icon--1En_X Icon--icon--2aW0V Icon--darkTheme--1PZ-8" set="astro" name="phase-14" theme="dark" data-testid="Icon" width="1024" height="1024" viewBox="0 0 1024 1024">
                                    <title>Moon Phase - Day 14</title>
                                    <path d="M516.262 978.714q189.669 0 325.261-135.06T977.115 517.86q0-190.202-135.592-325.528T516.262 57.006q-190.202 0-325.528 135.326T55.408 517.86q0 190.734 135.326 325.794t325.528 135.06zm0-956.87q204.587 0 350.568 145.981t145.981 350.568q0 205.12-145.981 350.568t-350.568 145.448q-205.12 0-350.568-145.448T20.246 518.393q0-204.587 145.448-350.568T516.262 21.844z"></path>
                                </svg>
                                <div data-testid="WeatherDetailsLabel" class="WeatherDetailsListItem--label--2ZacS">ข้างขึ้นข้างแรมของดวงจันทร์</div>
                                <div data-testid="wxData" class="WeatherDetailsListItem--wxData--kK35q">จันทร์เพ็ญ</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}