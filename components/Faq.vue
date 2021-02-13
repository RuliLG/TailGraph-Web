<template>
    <div>
        <div class="container mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently asked questions
            </h2>
            <div class="mt-6">
                <dl class="space-y-8 divide-y divide-gray-200">
                    <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            Why would I need this service?
                        </dt>
                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                Well, this service came to my mind as I was creating custom websites and I wanted to create a custom Open Graph image for each blog post, automatically. I think it makes it super easy to create your own OG layout and reuse it throughout your whole project.
                            </p>
                        </dd>
                    </div>

                    <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            Will you be adding different layouts?
                        </dt>
                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                Sure! The whole structure is thought to allow multiple layouts. Feel free to contact me over Twitter at @raullg97 to talk about different layouts :-)
                            </p>
                        </dd>
                    </div>

                    <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            Is this really free?
                        </dt>
                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                Yup! The intention is to leave this service free forever.
                            </p>
                        </dd>
                    </div>

                    <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            Is this service independent from TailwindCSS?
                        </dt>
                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                Totally. We have no link to the TailwindCSS team. We are just in love with the wonderful gift it is for developers.
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'faq'
}
</script>