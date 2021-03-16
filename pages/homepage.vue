<template>
	<div>
		<!-- HERO -->
		<section id="hero">
			<h1 ref="title"></h1>
			<v-button href="#contact">Start met vernieuwen</v-button>
		</section>

		<!-- CALL TO ACTION -->
		<section class="cta">
			<grid :gutter="0">
				<row class="cta">
					<column :size="12">
						<h2>{{cta_text}}</h2>

						<v-button
							href="#contact"
							type="white"
						>Meer informatie</v-button>
					</column>
				</row>
			</grid>
		</section>
		<section class="two-column">
			<div class="image-round">
				<img
					:src="`${$strapi.options.url}uploads/laptop_040706a4f4.png`"
					alt=""
				>
			</div>
			<div>
				<markdown
					:text="getTextblock('first block')"
					class="text-block"
				/>
				<v-button
					href="#contact"
					type="orange"
				>Get started
					<icon name="arrow" />
				</v-button>
			</div>
		</section>
		<section class="stats">
			<h2>Some count that matters</h2>
			<p>Our achievements in the journey depicted in numbers</p>

			<div class="numbers">
				<div
					class="counter"
					v-for="data in counter"
					:key="data.id"
				>
					<h3>{{data.amount}}</h3>
					<p>{{data.description}}</p>
				</div>
			</div>
		</section>
		<section class="two-column">
			<div class="image-square">
				<img
					:src="`${$strapi.options.url}uploads/phone_ff6673d61a.png`"
					alt=""
				>
			</div>
			<div>
				<markdown
					:text="getTextblock('first block')"
					class="text-block"
				/>
				<v-button
					href="#contact"
					type="text orange"
				>Get started
					<icon name="arrow" />
				</v-button>
			</div>
		</section>
		<section class="projects">
			<h2>Selected works</h2>
			<div class="grid">
				<article
					class="project"
					v-for="project in projects"
					:key="project.id"
				>
					<img
						:src="`${$strapi.options.url}${project.logo.url.substring(1)}`"
						:style="{background: project.color}"
					>
					<p class="title">{{project.client}} - <strong>{{project.title}}</strong></p>
					<div class="bottom">
						<strong>{{project.type}}</strong> <a :href="`/project/${project.slug}`">Read more</a>
					</div>
				</article>
			</div>
		</section>
		<section class="cta">
			<grid :gutter="0">
				<row class="cta">
					<column :size="12">
						<h2>{{cta_text_2}}</h2>

						<v-button
							type="white"
							href="#contact"
						>Meer informatie</v-button>
					</column>
				</row>
			</grid>
		</section>
		<section class="two-column">
			<div>
				<markdown
					:text="getTextblock('first block')"
					class="text-block"
				/>
				<v-button
					href="#contact"
					type="orange"
				>Get started
					<icon name="arrow" />
				</v-button>
			</div>
			<div class="image-square">
				<img
					:src="`${$strapi.options.url}uploads/phone_ff6673d61a.png`"
					alt=""
				>
			</div>
		</section>
		<section id="contact">
			<form
				v-if="!sentContact"
				:action="`${$strapi.options.url}contacts`"
				method="post"
				@submit="saveContact"
			>
				<label for="name">Naam</label>
				<input
					type="text"
					name="name"
					v-model="contact.name"
					required
				>
				<label for="email">Email</label>
				<input
					type="email"
					name="email"
					v-model="contact.email"
					required
				>
				<label for="phone">Telefoonnummer</label>
				<input
					type="tel"
					name="phone"
					v-model="contact.phone"
				>
				<label for="subject">Onderwerp</label>
				<input
					type="text"
					name="subject"
					v-model="contact.subject"
				>
				<label for="message">Bericht</label>
				<textarea
					name="message"
					v-model="contact.message"
					minlength="10"
					maxlength="512"
				></textarea>
				<p
					class="error"
					v-if="errors.message"
				>Er is te weinig ingevuld bij bericht.</p>
				<v-button>Verzenden</v-button>
			</form>
			<div v-else>
				<h1>Dankjewel voor het contact opnemen.</h1>
				<p>We nemen zo snel mogelijk contact op.</p>
			</div>
		</section>
		<footer>
			<p><img
					src="~/assets/logo.svg"
					class="logo"
				> Divs and devs</p>

			<div>
				<p>KvK: 000000</p>
				<p>Btw: 000000</p>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sentContact: false,
				contact: {
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: ''
				},
				errors: {},
				projects: []
			}
		},
		async asyncData({ $strapi }) {
			return await $strapi.find('homepage')
		},
		async fetch() {
			this.projects = await this.$strapi.find('projects')
		},
		methods: {
			async saveContact(ev) {
				ev.preventDefault()

				try {
					await this.$strapi.create('contacts', this.contact)
					this.sentContact = true
				} catch (e) {
					console.log({ ...e })
					this.errors = e.response.data.data.errors
					console.error(e.data)
				}
			},
			getTextblock(name) {
				const block = this.textblock.find(x => x.description == name)

				return block.text
			},
			startTypewriter() {
				const typewriter = new Typewriter(this.$refs.title, {
					autoStart: true,
					loop: false,
					delay: 100
				})

				typewriter
					.typeString(this.title)
					.start()
					.callFunction(() => {
						const cursor = document.querySelector('.Typewriter__cursor')
						if (cursor) cursor.remove()
					})
			}
		},
		mounted() {
			if (process.browser) this.startTypewriter()
		}
	}
</script>
<style lang="scss">

html {
	scroll-behavior: smooth;
}

</style>
<style lang="scss" scoped>
	h1 {
		max-width: 710px;
		text-align: center;
		margin: 0 auto 3rem auto;
	}

	section {
		overflow: hidden;
		padding: 0 10rem;
		height: 70vh;

		&#hero {
			height: 100vh;
			flex-direction: column;
			position: relative;
			margin: 0;

			@include flex;

			&:after {
				content: '';
				background: $accent2;
				width: 1200px;
				height: 1200px;
				border-radius: 100%;
				position: absolute;
				left: auto;
				right: auto;
				bottom: -110%;
			}
		}

		&.cta {
			background: $accent;
			border-radius: $border-radius;
			padding: 2.5rem 0;
			height: unset;
			margin: 0 10rem;

			h2 {
				margin-top: 0;
			}

			.col {
				@include flex;
				flex-direction: column;

				h2 {
					color: #fff;
				}
			}
		}

		&.stats {
			background-color: $accent2;
			color: #fff;
			text-align: center;
			padding: 4rem 0;
			height: unset;

			h2,
			p {
				margin: 0;
			}

			.numbers {
				margin-top: 3rem;
				@include flex(stretch);

				.counter {
					color: #fff;
					flex: 1;

					h3 {
						margin: 0;
						font-size: 2rem;
					}

					&:not(:last-of-type) {
						border-right: 1px solid rgba(255, 255, 255, 0.4);
					}
				}
			}
		}
	}

	.projects .grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 7rem;
		padding: 0 10rem;
		place-content: center;

		.project {
			.title {
				font-size: 1.2rem;

				strong {
					font-weight: 700;
				}
			}

			img {
				width: 100%;
				height: 15rem;
				padding: 1rem;
				box-sizing: border-box;

				border-radius: 0.5rem;

				object-fit: contain;
				object-position: center;
			}

			.bottom {
				@include flex(space-between);
				margin: 1.5rem 0;

				strong {
					font-weight: 700;
					font-size: 0.875rem;
					letter-spacing: 2px;
					text-transform: uppercase;
				}

				a {
					display: inline-block;
					text-decoration: none;
					background-color: $accent;
					padding: 0.5rem 1rem;
					border-radius: 5rem;
					color: #fff;
				}
			}
		}
	}

	.two-column {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		padding: 4rem 10rem;

		align-items: center;
		justify-items: space-between;

		div:last-child {
			justify-self: end;
		}
	}

	.text-block::v-deep {
		vertical-align: middle;

		em {
			color: $accent;
			font-weight: 700;
			letter-spacing: 2px;
			text-transform: uppercase;
			font-style: normal;
		}

		p {
			margin: 0;
		}

		h1 {
			margin: 0;
			font-size: 2.5rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
	}
	.image-square {
		background-color: $accent-light;
		border-radius: 1rem;

		width: 32rem;
		height: 32rem;

		@include flex(center, flex-end);
		padding: 1rem;
		padding-bottom: 0;

		img {
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}

	.image-round {
		background-color: $accent2-light;
		border-radius: 100%;

		width: 32rem;
		height: 32rem;

		@include flex;

		img {
			max-width: 100%;
			max-height: 100%;
			object-fit: contain;
			object-position: center;
		}
	}

	img {
		-webkit-user-drag: none;
	}

	footer {
		position: relative;
		height: 16rem;
		background-color: black;
		color: #fff;

		display: flex;

		place-items: center;
		place-content: center;

		> p {
			margin: 5rem;
		}

		.logo {
			width: 2.5rem;
			height: 2.5rem;
			vertical-align: middle;
		}

		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			background: url('~assets/logo-white.svg');
			background-position: left;
			background-size: 24rem;
			background-repeat: no-repeat;

			opacity: 0.1;
		}
	}
</style>