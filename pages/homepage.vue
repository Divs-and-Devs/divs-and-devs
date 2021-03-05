<template>
	<div>
		<!-- HERO -->
		<section id="hero">
			<h1 ref="title"></h1>
			<v-button>Start met vernieuwen</v-button>
		</section>

		<!-- CALL TO ACTION -->
		<section>
			<grid :gutter="0">
				<row class="cta">
					<column :size="12">
						<h2>{{cta_text}}</h2>
					</column>
				</row>
			</grid>
		</section>
		<section class="contact">
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
				errors: {}
			}
		},
		async asyncData({ $strapi }) {
			return await $strapi.find('homepage')
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
						document.querySelector('.Typewriter__cursor').remove()
					})
			}
		},
		mounted() {
			this.startTypewriter()
		}
	}
</script>

<style lang="scss" scoped>
	h1 {
		max-width: 710px;
		text-align: center;
		margin: 0 auto 3rem auto;
	}

	section {
		overflow: hidden;

		&#hero {
			max-height: 100vh;
			flex-direction: column;
			position: relative;

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
	}

	.row {
		&.cta {
			background: $accent;
			border-radius: $border-radius;

			.col {
				@include flex;
				flex-direction: column;

				h2 {
					color: #fff;
				}
			}
		}
	}
</style>