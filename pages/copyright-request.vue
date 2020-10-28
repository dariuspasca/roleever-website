<template>
  <div class="container py-20 mx-auto">
    <div class="w-full max-w-3xl">
      <h1 class="text-2xl pt-1 pb-4">Submit a request</h1>
      <p>
        If you are reporting a content policy violation, please use our report
        form.
      </p>
      <form action="" class="pt-8">
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Your e-mail address
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Subject of inquiry
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Details of inquiry
          </label>
          <textarea
            name="inquiry_subject"
            class="shadow appearance-none border rounded w-full py-2 px-3 resize-none h-32 focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <p class="text-dark-shade text-sm">
          I understand that the information I provide in this copyright
          infringement notice may be provided to the affected parties upon
          request.
        </p>
        <input type="checkbox" class="my-2" />
        <p class="mb-10 text-dark-shade text-sm">
          Note that we may provide the copyright owner's name, your contact
          information, and the description of the alleged infringement to the
          affected parties upon request. For this reason, you may wish to
          provide your business mailing address and professional email address
          in the Contact Information section of your notice. If you do not wish
          for your contact information to be shared with the affected parties,
          you may authorize a representative to submit the copyright
          infringement notice on your behalf.
        </p>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Copyright owner's full name (required)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
          <label class="block text-dark-shade text-sm mb-2" for="email">
            Provide the full name (first and last name or business name) of the
            copyright owner.
          </label>
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Your full name (if different from the copyright owner) (optional)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
          <label class="bloc text-dark-shade text-sm mb-2" for="email">
            If you are not the copyright owner but are authorized to submit this
            request on behalf of someone else, please provide your first and
            last name here. We do not accept initials, nicknames, aliases, or
            stage names.
          </label>
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Street address
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            City
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            State/Province
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Postal Code
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="number"
          />
        </div>
        <div class="mb-4">
          <label class="block text-dark-shade text-base mb-2" for="email">
            Country (required)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-dark-shade leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
        </div>
      </form>
    </div>
  </div>
</template>
