const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(req, res) {
        const annotationList = await Annotations.find();

        return res.json(annotationList);
    },

    async create(req, res) {
        const { title, notes, priority } = req.body;

        if (!title || !notes) {
            return res.status(400).json({ error: 'Titolo ou nota vazios' })
        }

        const annotationsCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.json(annotationsCreated);
    },

    async delete(req, res) {

        const { id } = req.params;

        const annotationsDeleted = await Annotations.findByIdAndDelete({ _id: id });

        if (annotationsDeleted) {
            return res.json(annotationsDeleted);
        }

        return res.status(401).json({ error: 'Não foi encontrado registro' });

    }

}