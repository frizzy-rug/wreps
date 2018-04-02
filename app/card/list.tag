<card-list>
    <div each={ cards } class='tick'> { name } </div>

    <script>
        this.cards = opts.cards
    </script>
    <style>
        :scope .tick {
            background: pink;
        }
    </style>
</card-list>
