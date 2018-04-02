<app>
    <h1> Visit </h1>
    <card-list cards={ cards }></card-list>
    <div class='tick'> Tick </div>

    <script>
        import './card'
        this.cards = [
            { name: 'a', url: 'aaa', views: 123 },
            { name: 'b', url: 'bbb', views: 456 },
            { name: 'c', url: 'ccc', views: 789 }
        ]
    </script>
    <style>
        :scope .tick {
            color: skyblue;
        }
    </style>
</app>
